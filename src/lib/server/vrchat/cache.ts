/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosResponse } from "axios";
import type { OperationResponse } from "openapi-client-axios";



// example api call:
// client.getGroup(GROUP_ID).then((res) => console.log(res.data));
// what we want: (cache for one second)
// cached(1000, "getGroup", client.getGroup, GROUP_ID).then((res) => console.log(res.data));

type RequestFn = (...args: any[]) => Promise<AxiosResponse<any>>

interface RequestCacheEntry {
  name: string;
  args: any[];
  promise: OperationResponse<any>;
}

const requestCache = new Map<string, RequestCacheEntry[]>();

export async function cachedRequest<T extends RequestFn>(time: number, name: string, fn: T, ...args: Parameters<T>): Promise<ReturnType<T>> {
  const entry = (requestCache.get(name) ?? []).find((entry) => {
    // Less resource intensive than checking all the args first
    if (entry.args.length !== args.length) return false;
    return entry.args.every((arg, i) => arg === args[i]);
  });
  if (entry) return entry.promise as ReturnType<T>;
  const promise = fn(...args);
  const newEntry: RequestCacheEntry = {
    name,
    args,
    promise,
  };
  requestCache.set(name, [...(requestCache.get(name) ?? []), newEntry]);
  setTimeout(() => {
    const index = requestCache.get(name)?.indexOf(newEntry);
    if (index !== undefined && index !== -1) requestCache.get(name)?.splice(index, 1);
  }, time);
  return newEntry.promise as ReturnType<T>;
}