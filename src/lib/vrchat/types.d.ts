/* eslint-disable @typescript-eslint/ban-types *//* eslint-disable @typescript-eslint/no-explicit-any */import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios';

declare namespace Components {
    namespace Parameters {
        export type AvatarId = string;
        export type Branch = string;
        export type DisplayName = string;
        export type Email = string;
        export type EndDate = string; // date-time
        export type ExcludeUserId = string;
        export type FavoriteGroupName = string;
        export type FavoriteGroupType = "world" | "friend" | "avatar";
        export type FavoriteId = string;
        export type Featured = boolean;
        /**
         * example:
         * file_00000000-0000-0000-0000-000000000000
         */
        export type FileId = string;
        /**
         * example:
         * file
         */
        export type FileType = "file" | "signature" | "delta";
        /**
         * example:
         * ggal_00000000-0000-0000-0000-000000000000
         */
        export type GroupGalleryId = string;
        /**
         * example:
         * ggim_00000000-0000-0000-0000-000000000000
         */
        export type GroupGalleryImageId = string;
        /**
         * example:
         * grp_00000000-0000-0000-0000-000000000000
         */
        export type GroupId = string;
        /**
         * example:
         * grol_00000000-0000-0000-0000-000000000000
         */
        export type GroupRoleId = string;
        export type Include = string;
        export type InstanceId = string;
        export type LicenseGroupId = string;
        export type MaxUnityVersion = string;
        export type MessageType = /**
         * InviteMessageType
         *
         */
        Schemas.InviteMessageType;
        export type MinUnityVersion = string;
        export type Notag = string;
        export type NotificationId = string;
        export type Number = number;
        export type Offline = boolean;
        export type Offset = number;
        export type Order = /**
         * OrderOption
         * example:
         * descending
         */
        Schemas.OrderOption;
        export type PermissionId = string;
        export type Platform = string;
        export type ReleaseStatus = /**
         * ReleaseStatus
         * example:
         * public
         */
        Schemas.ReleaseStatus;
        export type Require = string;
        export type Search = string;
        export type Slot = number;
        export type Sort = /**
         * SortOption
         * example:
         * popularity
         */
        Schemas.SortOption;
        export type StartDate = string; // date-time
        export type Tag = string;
        export type TransactionId = string;
        export type UserId = string;
        export type UserIdAdmin = string;
        export type UserIdQuery = string;
        export type Variant = "public" | "internal";
        /**
         * example:
         * 1
         */
        export type VersionId = number;
        export type WorldId = string;
    }
    export interface PathParameters {
        userId: Parameters.UserId;
        avatarId: Parameters.AvatarId;
        transactionId: Parameters.TransactionId;
        licenseGroupId: Parameters.LicenseGroupId;
        favoriteId: Parameters.FavoriteId;
        favoriteGroupType: Parameters.FavoriteGroupType;
        favoriteGroupName: Parameters.FavoriteGroupName;
        fileId: /**
         * example:
         * file_00000000-0000-0000-0000-000000000000
         */
        Parameters.FileId;
        versionId: /**
         * example:
         * 1
         */
        Parameters.VersionId;
        fileType: /**
         * example:
         * file
         */
        Parameters.FileType;
        groupId: /**
         * example:
         * grp_00000000-0000-0000-0000-000000000000
         */
        Parameters.GroupId;
        groupGalleryId: /**
         * example:
         * ggal_00000000-0000-0000-0000-000000000000
         */
        Parameters.GroupGalleryId;
        groupGalleryImageId: /**
         * example:
         * ggim_00000000-0000-0000-0000-000000000000
         */
        Parameters.GroupGalleryImageId;
        groupRoleId: /**
         * example:
         * grol_00000000-0000-0000-0000-000000000000
         */
        Parameters.GroupRoleId;
        worldId: Parameters.WorldId;
        instanceId: Parameters.InstanceId;
        notificationId: Parameters.NotificationId;
        messageType: Parameters.MessageType;
        slot: Parameters.Slot;
        permissionId: Parameters.PermissionId;
    }
    export interface QueryParameters {
        email?: Parameters.Email;
        displayName?: Parameters.DisplayName;
        userIdQuery?: Parameters.UserIdQuery;
        excludeUserId?: Parameters.ExcludeUserId;
        featured?: Parameters.Featured;
        sort?: Parameters.Sort;
        number?: Parameters.Number;
        order?: Parameters.Order;
        offset?: Parameters.Offset;
        tag?: Parameters.Tag;
        notag?: Parameters.Notag;
        releaseStatus?: Parameters.ReleaseStatus;
        maxUnityVersion?: Parameters.MaxUnityVersion;
        minUnityVersion?: Parameters.MinUnityVersion;
        platform?: Parameters.Platform;
        search?: Parameters.Search;
        userIdAdmin?: Parameters.UserIdAdmin;
        offline?: Parameters.Offline;
        startDate?: Parameters.StartDate /* date-time */;
        endDate?: Parameters.EndDate /* date-time */;
        require?: Parameters.Require;
        include?: Parameters.Include;
        variant?: Parameters.Variant;
        branch?: Parameters.Branch;
    }
    namespace Responses {
        export type APIConfigResponse = /**
         * APIConfig
         *
         * example:
         * {
         *   "VoiceEnableDegradation": false,
         *   "VoiceEnableReceiverLimiting": true,
         *   "address": "1062 Folsom St., Suite 200, San Francisco, CA, 94103",
         *   "announcements": [
         *     {
         *       "name": "220121a_modified_clients",
         *       "text": "As part of our continued commitment to improve\nsafety and awareness, we want to remind you that\n<color='red'>modified clients of any kind are not allowed\non VRChat</color>, for any reason, and are prohibited\nby the Terms of Service.\n\nThere is no such thing as an 'approved'\nmodification, nor do we permit the use of\nany modification, for any purpose, ever.\n<color='red'>Using them can and will result in your\naccount being banned!</color>\n\nIn addition, modified clients are the single\ngreatest source of <color='red'>compromised and stolen\naccounts</color>-- so please, do not use them!"
         *     }
         *   ],
         *   "appName": "VrChat",
         *   "buildVersionTag": "master-build-2021-09-23-edith-x-clickbaitcloud",
         *   "clientApiKey": "JlE5Jldo5Jibnk5O5hTx6XVqsJu4WJ26",
         *   "clientBPSCeiling": 18432,
         *   "clientDisconnectTimeout": 30000,
         *   "clientReservedPlayerBPS": 7168,
         *   "clientSentCountAllowance": 15,
         *   "contactEmail": "hello@vrchat.com",
         *   "copyrightEmail": "copyright@vrchat.com",
         *   "currentTOSVersion": 7,
         *   "defaultAvatar": "avtr_c38a1615-5bf5-42b4-84eb-a8b6c37cbd11",
         *   "deploymentGroup": "blue",
         *   "devAppVersionStandalone": "0.12.0p3",
         *   "devDownloadLinkWindows": "www.vrchat.net",
         *   "devSdkUrl": "https://vrchat.com/home/download",
         *   "devSdkVersion": "2020.09.25.00.08",
         *   "devServerVersionStandalone": "dev_server_01",
         *   "dis-countdown": "2021-01-01T01:01:01.000Z",
         *   "disableAvatarCopying": false,
         *   "disableAvatarGating": false,
         *   "disableCommunityLabs": false,
         *   "disableCommunityLabsPromotion": false,
         *   "disableEmail": false,
         *   "disableEventStream": false,
         *   "disableFeedbackGating": false,
         *   "disableFrontendBuilds": false,
         *   "disableHello": false,
         *   "disableOculusSubs": false,
         *   "disableRegistration": false,
         *   "disableSteamNetworking": true,
         *   "disableTwoFactorAuth": false,
         *   "disableUdon": false,
         *   "disableUpgradeAccount": false,
         *   "downloadLinkWindows": "https://www.oculus.com/experiences/rift/997678176960598/",
         *   "downloadUrls": {
         *     "sdk2": "https://files.vrchat.cloud/sdk/VRCSDK2-2021.09.03.09.25_Public.unitypackage",
         *     "sdk3-avatars": "https://files.vrchat.cloud/sdk/VRCSDK3-AVATAR-2021.09.03.09.25_Public.unitypackage",
         *     "sdk3-worlds": "https://files.vrchat.cloud/sdk/VRCSDK3-WORLD-2021.09.03.09.25_Public.unitypackage",
         *     "vcc": "https://vrcpm.vrchat.cloud/vcc/Builds/2.1.1/VRChat_CreatorCompanion_Setup_2.1.1.exe",
         *     "bootstrap": "https://github.com/vrchat/packages/releases/download/resolvers/latest-resolver.unitypackage"
         *   },
         *   "dynamicWorldRows": [
         *     {
         *       "index": 1,
         *       "name": "Hot",
         *       "platform": "ThisPlatformSupported",
         *       "sortHeading": "heat",
         *       "sortOrder": "descending",
         *       "sortOwnership": "any"
         *     },
         *     {
         *       "index": 2,
         *       "name": "World Jam: Obstacle Course",
         *       "platform": "ThisPlatformSupported",
         *       "sortHeading": "order",
         *       "sortOrder": "ascending",
         *       "sortOwnership": "any",
         *       "tag": "admin_jam_obstacle"
         *     },
         *     {
         *       "index": 3,
         *       "name": "Exercise",
         *       "platform": "Any",
         *       "sortHeading": "shuffle",
         *       "sortOrder": "descending",
         *       "sortOwnership": "any",
         *       "tag": "admin_exercise_row"
         *     },
         *     {
         *       "index": 4,
         *       "name": "Spotlight",
         *       "platform": "ThisPlatformSupported",
         *       "sortHeading": "updated",
         *       "sortOrder": "descending",
         *       "sortOwnership": "any",
         *       "tag": "admin_community_spotlight"
         *     },
         *     {
         *       "index": 5,
         *       "name": "Community Labs",
         *       "platform": "ThisPlatformSupported",
         *       "sortHeading": "labs",
         *       "sortOrder": "descending",
         *       "sortOwnership": "any"
         *     },
         *     {
         *       "index": 6,
         *       "name": "Active Cross Platform",
         *       "platform": "AllPlatforms",
         *       "sortHeading": "active",
         *       "sortOrder": "descending",
         *       "sortOwnership": "any"
         *     },
         *     {
         *       "index": 7,
         *       "name": "Active My Platform",
         *       "platform": "ThisPlatformOnly",
         *       "sortHeading": "active",
         *       "sortOrder": "descending",
         *       "sortOwnership": "any"
         *     },
         *     {
         *       "index": 8,
         *       "name": "Random",
         *       "platform": "ThisPlatformSupported",
         *       "sortHeading": "shuffle",
         *       "sortOrder": "descending",
         *       "sortOwnership": "any"
         *     },
         *     {
         *       "index": 9,
         *       "name": "Avatar Worlds",
         *       "platform": "ThisPlatformSupported",
         *       "sortHeading": "heat",
         *       "sortOrder": "descending",
         *       "sortOwnership": "any",
         *       "tag": "author_tag_avatar"
         *     },
         *     {
         *       "index": 10,
         *       "name": "Games",
         *       "platform": "ThisPlatformSupported",
         *       "sortHeading": "heat",
         *       "sortOrder": "descending",
         *       "sortOwnership": "any",
         *       "tag": "author_tag_game"
         *     },
         *     {
         *       "index": 11,
         *       "name": "Updated Recently",
         *       "platform": "ThisPlatformSupported",
         *       "sortHeading": "updated",
         *       "sortOrder": "descending",
         *       "sortOwnership": "any"
         *     },
         *     {
         *       "index": 12,
         *       "name": "New",
         *       "platform": "ThisPlatformSupported",
         *       "sortHeading": "publication",
         *       "sortOrder": "descending",
         *       "sortOwnership": "any"
         *     },
         *     {
         *       "index": 13,
         *       "name": "Recent",
         *       "platform": "ThisPlatformSupported",
         *       "sortHeading": "recent",
         *       "sortOrder": "descending",
         *       "sortOwnership": "any"
         *     },
         *     {
         *       "index": 14,
         *       "name": "Mine",
         *       "platform": "any",
         *       "sortHeading": "updated",
         *       "sortOrder": "descending",
         *       "sortOwnership": "mine"
         *     },
         *     {
         *       "index": 15,
         *       "name": "Classics",
         *       "platform": "ThisPlatformSupported",
         *       "sortHeading": "trending",
         *       "sortOrder": "descending",
         *       "sortOwnership": "any"
         *     }
         *   ],
         *   "events": {
         *     "distanceClose": 2,
         *     "distanceFactor": 100,
         *     "distanceFar": 80,
         *     "groupDistance": 3,
         *     "maximumBunchSize": 247,
         *     "notVisibleFactor": 100,
         *     "playerOrderBucketSize": 5,
         *     "playerOrderFactor": 55,
         *     "slowUpdateFactorThreshold": 25,
         *     "viewSegmentLength": 5
         *   },
         *   "gearDemoRoomId": "2282253502",
         *   "homeWorldId": "wrld_4432ea9b-729c-46e3-8eaf-846aa0a37fdd",
         *   "homepageRedirectTarget": "https://hello.vrchat.com",
         *   "hubWorldId": "wrld_ba913a96-fac4-4048-a062-9aa5db092812",
         *   "jobsEmail": "jobs@vrchat.com",
         *   "messageOfTheDay": "hello world",
         *   "moderationEmail": "moderation@vrchat.com",
         *   "moderationQueryPeriod": 60,
         *   "notAllowedToSelectAvatarInPrivateWorldMessage": "For security reasons, you're not yet allowed to select avatars in private worlds or upload content. Please continue to enjoy VRChat and we'll message you when you've been unlocked. Thanks and have fun!",
         *   "plugin": "no_kick_unlisted",
         *   "releaseAppVersionStandalone": "0.12.0p3",
         *   "releaseSdkUrl": "http://files.vrchat.cloud/sdk/VRCSDK-2019.09.18.12.05_Public.unitypackage",
         *   "releaseSdkVersion": "VRCSDK-2019.09.18.12.05_Public",
         *   "releaseServerVersionStandalone": "public_server_01",
         *   "sdkDeveloperFaqUrl": "https://docs.vrchat.com/docs/frequently-asked-questions#section-why-can-t-i-upload-content-yet-",
         *   "sdkDiscordUrl": "https://discord.gg/vrchat",
         *   "sdkNotAllowedToPublishMessage": "Welcome the VRChat SDK!\r\n\r\nBefore you can upload avatars or worlds to VRChat, you'll need to spend more time enjoying the app. We do this for security reasons, and so you can learn more about us.\r\n\r\nWhen you get the ability to upload, we will notify you via email and in VRChat. For now, you can learn and test on your own device.\r\n\r\nTo get started, check out the resources below.\r\n\r\nThank you for your patience, we can't wait to see what you'll build!",
         *   "sdkUnityVersion": "2019.4.30f1",
         *   "serverName": "prod-api-blue-house-fsm",
         *   "supportEmail": "support@vrchat.com",
         *   "timeOutWorldId": "wrld_5b89c79e-c340-4510-be1b-476e9fcdedcc",
         *   "tutorialWorldId": "wld_7d3d25ec-663e-406e-96a3-e2c4fc0d8104",
         *   "updateRateMsMaximum": 1000,
         *   "updateRateMsMinimum": 50,
         *   "updateRateMsNormal": 200,
         *   "updateRateMsUdonManual": 50,
         *   "uploadAnalysisPercent": 1,
         *   "urlList": [
         *     "drive.google.com",
         *     "facebook.com",
         *     "www.facebook.com",
         *     "nicovideo.jp",
         *     "www.nicovideo.jp",
         *     "live.nicovideo.jp",
         *     "live2.nicovideo.jp",
         *     "game.nicovideo.jp",
         *     "soundcloud.com",
         *     "tiktok.com",
         *     "www.tiktok.com",
         *     "twitch.tv",
         *     "www.twitch.tv",
         *     "vimeo.com",
         *     "player.vimeo.com",
         *     "vrchat.cloud",
         *     "youku.com",
         *     "v.youku.com",
         *     "youtube.com",
         *     "www.youtube.com",
         *     "youtu.be",
         *     "assets.vrchat.com",
         *     "www.v-market.work",
         *     "vket6.v-market.work",
         *     "mall.v-market.work",
         *     "cdn.v-market.work",
         *     "movie.cdn.v-market.work",
         *     "wrs.nedo.go.jp"
         *   ],
         *   "useReliableUdpForVoice": false,
         *   "userUpdatePeriod": 60,
         *   "userVerificationDelay": 5,
         *   "userVerificationRetry": 30,
         *   "userVerificationTimeout": 60,
         *   "viveWindowsUrl": "http://store.steampowered.com/app/438100/",
         *   "whiteListedAssetUrls": [
         *     "http://dbinj8iahsbec.cloudfront.net/plugins",
         *     "http://dbinj8iahsbec.cloudfront.net/",
         *     "https://dbinj8iahsbec.cloudfront.net/",
         *     "https://dev-api.vrchat.cloud/api/1/file/",
         *     "https://api.vrchat.cloud/api/1/file/",
         *     "https://files.vrchat.cloud/unmanaged/"
         *   ],
         *   "worldUpdatePeriod": 60,
         *   "player-url-resolver-hash": "E3-C6-63-C3-27-3F-1C-47-48-C6-A7-52-A1-53-03-A5-10-6C-45-37-B1-C3-14-70-BA-44-1F-AE-0E-B2-32-36",
         *   "player-url-resolver-version": "2021-05-16T00:00:00.000Z"
         * }
         */
        Schemas.APIConfig;
        export type APIHealthResponse = /* APIHealth */ Schemas.APIHealth;
        export type AcceptFriendRequestError = /* Error */ Schemas.Error;
        export type AvatarListResponse = /**
         * Avatar
         *
         */
        Schemas.Avatar[];
        export type AvatarNotFoundError = /* Error */ Schemas.Error;
        export type AvatarNotTaggedAsFallbackError = /* Error */ Schemas.Error;
        export type AvatarResponse = /**
         * Avatar
         *
         */
        Schemas.Avatar;
        export type AvatarSeeOtherUserCurrentAvatarError = /* Error */ Schemas.Error;
        export type AvatarSeeOtherUserFavoritesError = /* Error */ Schemas.Error;
        export type ClearNotificationsSuccess = /* Success */ Schemas.Success;
        /**
         * Number of online users
         * example:
         * 12345
         */
        export type CurrentOnlineUsersResponse = number;
        export type CurrentUserLoginResponse = /* CurrentUser */ Schemas.CurrentUser;
        export type CurrentUserResponse = /* CurrentUser */ Schemas.CurrentUser;
        export type DeleteFriendRequestError = /* Error */ Schemas.Error;
        export type DeleteFriendSuccess = /* Success */ Schemas.Success;
        export type DeleteGroupAnnouncementSuccess = /* Success */ Schemas.Success;
        export type DeleteGroupGalleryImageSuccess = /* Success */ Schemas.Success;
        export type DeleteGroupGallerySuccess = /* Success */ Schemas.Success;
        export type DeleteGroupSuccess = /* Success */ Schemas.Success;
        export type DeleteUserResponse = /* CurrentUser */ Schemas.CurrentUser;
        export type DownloadSourceCodeAccessError = /* Error */ Schemas.Error;
        export type FavoriteAddAlreadyFavoritedError = /* Error */ Schemas.Error;
        export type FavoriteAddNotFriendsError = /* Error */ Schemas.Error;
        export type FavoriteGroupClearedSuccess = /* Success */ Schemas.Success;
        export type FavoriteGroupListResponse = /**
         * FavoriteGroup
         *
         */
        Schemas.FavoriteGroup[];
        export type FavoriteGroupResponse = /**
         * FavoriteGroup
         *
         */
        Schemas.FavoriteGroup;
        export type FavoriteListResponse = /**
         * Favorite
         *
         */
        Schemas.Favorite[];
        export type FavoriteNotFoundError = /* Error */ Schemas.Error;
        export type FavoriteRemovedSuccess = /* Success */ Schemas.Success;
        export type FavoriteResponse = /**
         * Favorite
         *
         */
        Schemas.Favorite;
        export type FeaturedSetNotAdminError = /* Error */ Schemas.Error;
        export type FileDeletedError = /* Error */ Schemas.Error;
        export type FileDeletedSuccess = /* Success */ Schemas.Success;
        export type FileListResponse = /**
         * File
         *
         */
        Schemas.File[];
        export type FileNotFoundError = /* Error */ Schemas.Error;
        export type FileResponse = /**
         * File
         *
         */
        Schemas.File;
        export type FileUploadAlreadyFinishedError = /* Error */ Schemas.Error;
        export type FileUploadURLResponse = /**
         * FileUploadURL
         *
         */
        Schemas.FileUploadURL;
        export type FileVersionDeleteInitialError = /* Error */ Schemas.Error;
        export type FileVersionDeleteMiddleError = /* Error */ Schemas.Error;
        export type FileVersionUploadStatusResponse = /**
         * FileVersionUploadStatus
         *
         */
        Schemas.FileVersionUploadStatus;
        export type FriendStatusResponse = /* FriendStatus */ Schemas.FriendStatus;
        export type FriendSuccess = /* Success */ Schemas.Success;
        export type GroupAlreadyMemberError = /* Error */ Schemas.Error;
        export type GroupAnnouncementResponse = /* GroupAnnouncement */ Schemas.GroupAnnouncement;
        export type GroupAuditLogListResponse = /* PaginatedGroupAuditLogEntryList */ Schemas.PaginatedGroupAuditLogEntryList;
        export type GroupGalleryImageDeleteForbiddenError = /* Error */ Schemas.Error;
        export type GroupGalleryImageListResponse = /* GroupGalleryImage */ Schemas.GroupGalleryImage[];
        export type GroupGalleryImageResponse = /* GroupGalleryImage */ Schemas.GroupGalleryImage;
        export type GroupGalleryResponse = /* GroupMember */ Schemas.GroupGallery;
        export type GroupInstancesResponse = /**
         * Instance
         * * `hidden` field is only present if InstanceType is `hidden` aka "Friends+", and is instance creator.
         * * `friends` field is only present if InstanceType is `friends` aka "Friends", and is instance creator.
         * * `private` field is only present if InstanceType is `private` aka "Invite" or "Invite+", and is instance creator.
         */
        Schemas.Instance[];
        export type GroupLimitedMemberResponse = /* GroupLimitedMember */ Schemas.GroupLimitedMember;
        export type GroupListResponse = /* Group */ Schemas.Group[];
        export type GroupMemberListResponse = /* GroupMember */ Schemas.GroupMember[];
        export type GroupMemberResponse = /* GroupMember */ Schemas.GroupMember;
        export type GroupNotFoundError = /* Error */ Schemas.Error;
        export type GroupNotMemberError = /* Error */ Schemas.Error;
        export type GroupPermissionListResponse = /**
         * GroupPermission
         * A permission that can be granted to a role in a group.
         */
        Schemas.GroupPermission[];
        export type GroupResponse = /* Group */ Schemas.Group;
        export type GroupRoleIDListResponse = /**
         * GroupRoleIDList
         *
         */
        Schemas.GroupRoleIDList;
        export type GroupRoleListResponse = /* GroupRole */ Schemas.GroupRole[];
        export type GroupRoleResponse = /* GroupRole */ Schemas.GroupRole;
        export type InfoPushListResponse = /**
         * InfoPush
         *
         */
        Schemas.InfoPush[];
        export type InstanceNotFoundError = /* Error */ Schemas.Error;
        export type InstanceResponse = /**
         * Instance
         * * `hidden` field is only present if InstanceType is `hidden` aka "Friends+", and is instance creator.
         * * `friends` field is only present if InstanceType is `friends` aka "Friends", and is instance creator.
         * * `private` field is only present if InstanceType is `private` aka "Invite" or "Invite+", and is instance creator.
         */
        Schemas.Instance;
        export type InstanceSelfInviteSuccess = /* Success */ Schemas.Success;
        export type InstanceShortNameResponse = /* InstanceShortNameResponse */ Schemas.InstanceShortNameResponse;
        export type InvalidAdminCredentialsError = /* Error */ Schemas.Error;
        export type InviteMessageGetNegativeSlotError = /* Error */ Schemas.Error;
        export type InviteMessageGetTooHighSlotError = /* Error */ Schemas.Error;
        export type InviteMessageInvalidSlotNumberError = /* Error */ Schemas.Error;
        export type InviteMessageListResponse = /**
         * InviteMessage
         *
         */
        Schemas.InviteMessage[];
        export type InviteMessageNoEntryForSlotError = /* Error */ Schemas.Error;
        export type InviteMessageResponse = /**
         * InviteMessage
         *
         */
        Schemas.InviteMessage;
        export type InviteMessageUpdateRateLimitError = /* Error */ Schemas.Error;
        export type InviteMustBeFriendsError = /* Error */ Schemas.Error;
        export type InviteResponse400Error = /* Error */ Schemas.Error;
        export type LicenseGroupListResponse = /**
         * LicenseGroup
         *
         * example:
         * {
         *   "id": "lgrp_608513da-b213-4e15-80af-bd88c27f0979",
         *   "name": "vrcplus",
         *   "description": "VRC+ benefits",
         *   "licenses": [
         *     {
         *       "forId": "prms_1d9549db-d30a-48f3-a6b8-6741ce5a4283",
         *       "forType": "permission",
         *       "forName": "permission-user-icons",
         *       "forAction": "have"
         *     },
         *     {
         *       "forId": "prms_76f33deb-dd5d-46b7-b79d-e1f8f0a9a1e0",
         *       "forType": "permission",
         *       "forName": "permission-supporter-tags",
         *       "forAction": "have"
         *     },
         *     {
         *       "forId": "prms_0d9549db-d30a-48f3-a6b8-6741ce5a4283",
         *       "forType": "permission",
         *       "forName": "permission-invite-photos",
         *       "forAction": "have"
         *     },
         *     {
         *       "forId": "prms_dc02c512-4c03-479c-8c6a-d9329c023baf",
         *       "forType": "permission",
         *       "forName": "permission-user-gallery",
         *       "forAction": "have"
         *     },
         *     {
         *       "forId": "prms_153ac0b7-c2dd-43f9-96e3-c61fd2e85509",
         *       "forType": "permission",
         *       "forName": "permission-profile-pic-override",
         *       "forAction": "have"
         *     }
         *   ]
         * }
         */
        Schemas.LicenseGroup[];
        export type LicenseGroupResponse = /**
         * LicenseGroup
         *
         * example:
         * {
         *   "id": "lgrp_608513da-b213-4e15-80af-bd88c27f0979",
         *   "name": "vrcplus",
         *   "description": "VRC+ benefits",
         *   "licenses": [
         *     {
         *       "forId": "prms_1d9549db-d30a-48f3-a6b8-6741ce5a4283",
         *       "forType": "permission",
         *       "forName": "permission-user-icons",
         *       "forAction": "have"
         *     },
         *     {
         *       "forId": "prms_76f33deb-dd5d-46b7-b79d-e1f8f0a9a1e0",
         *       "forType": "permission",
         *       "forName": "permission-supporter-tags",
         *       "forAction": "have"
         *     },
         *     {
         *       "forId": "prms_0d9549db-d30a-48f3-a6b8-6741ce5a4283",
         *       "forType": "permission",
         *       "forName": "permission-invite-photos",
         *       "forAction": "have"
         *     },
         *     {
         *       "forId": "prms_dc02c512-4c03-479c-8c6a-d9329c023baf",
         *       "forType": "permission",
         *       "forName": "permission-user-gallery",
         *       "forAction": "have"
         *     },
         *     {
         *       "forId": "prms_153ac0b7-c2dd-43f9-96e3-c61fd2e85509",
         *       "forType": "permission",
         *       "forName": "permission-profile-pic-override",
         *       "forAction": "have"
         *     }
         *   ]
         * }
         */
        Schemas.LicenseGroup;
        export type LimitedGroupListResponse = /* LimitedGroup */ Schemas.LimitedGroup[];
        export type LimitedUserListResponse = /**
         * LimitedUser
         *
         */
        Schemas.LimitedUser[];
        export type LimitedWorldListResponse = /**
         * LimitedWorld
         *
         */
        Schemas.LimitedWorld[];
        export type LogoutSuccess = /* Success */ Schemas.Success;
        export type MissingCredentialsError = /* Error */ Schemas.Error;
        export type MissingParameterError = /* Error */ Schemas.Error;
        export type NotAuthorizedActionError = /* Error */ Schemas.Error;
        export type NotFriendsError = /* Error */ Schemas.Error;
        export type NotificationListResponse = /**
         * Notification
         *
         */
        Schemas.Notification[];
        export type NotificationResponse = /**
         * Notification
         *
         */
        Schemas.Notification;
        export type PermissionListResponse = /**
         * Permission
         *
         * example:
         * {
         *   "data": {
         *     "maxFavoriteGroups": {
         *       "avatar": 4
         *     },
         *     "maxFavoritesPerGroup": {
         *       "avatar": 25
         *     }
         *   },
         *   "id": "prms_804ba021-9f47-4e25-9847-1f42fdb2e6ff",
         *   "name": "permission-extra-favorites-avatar-groups",
         *   "ownerId": "usr_17f19d1e-fd48-493b-a8ad-807a3d8bdd1b"
         * }
         */
        Schemas.Permission[];
        export type PermissionResponse = /**
         * Permission
         *
         * example:
         * {
         *   "data": {
         *     "maxFavoriteGroups": {
         *       "avatar": 4
         *     },
         *     "maxFavoritesPerGroup": {
         *       "avatar": 25
         *     }
         *   },
         *   "id": "prms_804ba021-9f47-4e25-9847-1f42fdb2e6ff",
         *   "name": "permission-extra-favorites-avatar-groups",
         *   "ownerId": "usr_17f19d1e-fd48-493b-a8ad-807a3d8bdd1b"
         * }
         */
        Schemas.Permission;
        export type PlayerModerationClearAllSuccess = /* Success */ Schemas.Success;
        export type PlayerModerationDeleteOthersError = /* Error */ Schemas.Error;
        export type PlayerModerationListResponse = /* PlayerModeration */ Schemas.PlayerModeration[];
        export type PlayerModerationNotFoundError = /* Error */ Schemas.Error;
        export type PlayerModerationRemovedSuccess = /* Success */ Schemas.Success;
        export type PlayerModerationResponse = /* PlayerModeration */ Schemas.PlayerModeration;
        export type PlayerModerationUnmoderatedSuccess = /* Success */ Schemas.Success;
        export interface RawFileResponse {
        }
        export type SendNotificationResponse = /**
         * SentNotification
         *
         */
        Schemas.SentNotification;
        export type SubscriptionListResponse = /**
         * Subscription
         *
         * example:
         * {
         *   "id": "vrchatplus-yearly",
         *   "steamItemId": "5000",
         *   "amount": 9999,
         *   "description": "VRChat Plus (Yearly)",
         *   "period": "year",
         *   "tier": 5
         * }
         */
        Schemas.Subscription[];
        /**
         * Does not return millisecond precision. Always returns time in UTC.
         * example:
         * 2021-08-20T12:38:42.000Z
         */
        export type SystemTimeResponse = string; // date-time
        export type TransactionListResponse = /**
         * Transaction
         *
         */
        Schemas.Transaction[];
        export type TransactionResponse = /**
         * Transaction
         *
         */
        Schemas.Transaction;
        export type UnfriendSuccess = /* Success */ Schemas.Success;
        export type UserDoesntExistError = /* Error */ Schemas.Error;
        export type UserExistsResponse = /**
         * UserExists
         * Status object representing if a queried user by username or userId exists or not. This model is primarily used by the `/auth/exists` endpoint, which in turn is used during registration. Please see the documentation on that endpoint for more information on usage.
         */
        Schemas.UserExists;
        export type UserResponse = /* User */ Schemas.User;
        export type UserSubscriptionListResponse = /**
         * UserSubscription
         *
         * example:
         * {
         *   "id": "vrchatplus-yearly",
         *   "transactionId": "txn_63231aa6-8b7a-49ff-a106-d5678f8318b1",
         *   "store": "Steam",
         *   "steamItemId": "5000",
         *   "amount": 9999,
         *   "description": "VRChat Plus (Yearly)",
         *   "period": "year",
         *   "tier": 5,
         *   "active": true,
         *   "status": "active",
         *   "expires": "2022-03-04T00:00:00.000Z",
         *   "created_at": "2020-12-04T13:09:54.344Z",
         *   "updated_at": "2020-12-10T19:53:45.362Z",
         *   "licenseGroups": [
         *     "lgrp_608513da-b213-4e15-80af-bd88c27f0979"
         *   ],
         *   "isGift": false
         * }
         */
        Schemas.UserSubscription[];
        export type UsersInvalidSearchError = /* Error */ Schemas.Error;
        export type Verify2FAEmailCodeResponse = /* Verify2FAEmailCodeResult */ Schemas.Verify2FAEmailCodeResult;
        export type Verify2FAResponse = /* Verify2FAResult */ Schemas.Verify2FAResult;
        export type VerifyAuthTokenResponse = /* VerifyAuthTokenResult */ Schemas.VerifyAuthTokenResult;
        export type WorldCreateNotAllowedYetError = /* Error */ Schemas.Error;
        export type WorldMetadataResponse = /* WorldMetadata */ Schemas.WorldMetadata;
        export type WorldNotFoundError = /* Error */ Schemas.Error;
        export type WorldPublishStatusResponse = /* WorldPublishStatus */ Schemas.WorldPublishStatus;
        export type WorldResponse = /**
         * LimitedWorld
         *
         */
        Schemas.LimitedWorld;
        export type WorldSeeOtherUserFavoritesError = /* Error */ Schemas.Error;
        export type WorldSeeOtherUserRecentsError = /* Error */ Schemas.Error;
    }
    namespace Schemas {
        /**
         * APIConfig
         *
         * example:
         * {
         *   "VoiceEnableDegradation": false,
         *   "VoiceEnableReceiverLimiting": true,
         *   "address": "1062 Folsom St., Suite 200, San Francisco, CA, 94103",
         *   "announcements": [
         *     {
         *       "name": "220121a_modified_clients",
         *       "text": "As part of our continued commitment to improve\nsafety and awareness, we want to remind you that\n<color='red'>modified clients of any kind are not allowed\non VRChat</color>, for any reason, and are prohibited\nby the Terms of Service.\n\nThere is no such thing as an 'approved'\nmodification, nor do we permit the use of\nany modification, for any purpose, ever.\n<color='red'>Using them can and will result in your\naccount being banned!</color>\n\nIn addition, modified clients are the single\ngreatest source of <color='red'>compromised and stolen\naccounts</color>-- so please, do not use them!"
         *     }
         *   ],
         *   "appName": "VrChat",
         *   "buildVersionTag": "master-build-2021-09-23-edith-x-clickbaitcloud",
         *   "clientApiKey": "JlE5Jldo5Jibnk5O5hTx6XVqsJu4WJ26",
         *   "clientBPSCeiling": 18432,
         *   "clientDisconnectTimeout": 30000,
         *   "clientReservedPlayerBPS": 7168,
         *   "clientSentCountAllowance": 15,
         *   "contactEmail": "hello@vrchat.com",
         *   "copyrightEmail": "copyright@vrchat.com",
         *   "currentTOSVersion": 7,
         *   "defaultAvatar": "avtr_c38a1615-5bf5-42b4-84eb-a8b6c37cbd11",
         *   "deploymentGroup": "blue",
         *   "devAppVersionStandalone": "0.12.0p3",
         *   "devDownloadLinkWindows": "www.vrchat.net",
         *   "devSdkUrl": "https://vrchat.com/home/download",
         *   "devSdkVersion": "2020.09.25.00.08",
         *   "devServerVersionStandalone": "dev_server_01",
         *   "dis-countdown": "2021-01-01T01:01:01.000Z",
         *   "disableAvatarCopying": false,
         *   "disableAvatarGating": false,
         *   "disableCommunityLabs": false,
         *   "disableCommunityLabsPromotion": false,
         *   "disableEmail": false,
         *   "disableEventStream": false,
         *   "disableFeedbackGating": false,
         *   "disableFrontendBuilds": false,
         *   "disableHello": false,
         *   "disableOculusSubs": false,
         *   "disableRegistration": false,
         *   "disableSteamNetworking": true,
         *   "disableTwoFactorAuth": false,
         *   "disableUdon": false,
         *   "disableUpgradeAccount": false,
         *   "downloadLinkWindows": "https://www.oculus.com/experiences/rift/997678176960598/",
         *   "downloadUrls": {
         *     "sdk2": "https://files.vrchat.cloud/sdk/VRCSDK2-2021.09.03.09.25_Public.unitypackage",
         *     "sdk3-avatars": "https://files.vrchat.cloud/sdk/VRCSDK3-AVATAR-2021.09.03.09.25_Public.unitypackage",
         *     "sdk3-worlds": "https://files.vrchat.cloud/sdk/VRCSDK3-WORLD-2021.09.03.09.25_Public.unitypackage",
         *     "vcc": "https://vrcpm.vrchat.cloud/vcc/Builds/2.1.1/VRChat_CreatorCompanion_Setup_2.1.1.exe",
         *     "bootstrap": "https://github.com/vrchat/packages/releases/download/resolvers/latest-resolver.unitypackage"
         *   },
         *   "dynamicWorldRows": [
         *     {
         *       "index": 1,
         *       "name": "Hot",
         *       "platform": "ThisPlatformSupported",
         *       "sortHeading": "heat",
         *       "sortOrder": "descending",
         *       "sortOwnership": "any"
         *     },
         *     {
         *       "index": 2,
         *       "name": "World Jam: Obstacle Course",
         *       "platform": "ThisPlatformSupported",
         *       "sortHeading": "order",
         *       "sortOrder": "ascending",
         *       "sortOwnership": "any",
         *       "tag": "admin_jam_obstacle"
         *     },
         *     {
         *       "index": 3,
         *       "name": "Exercise",
         *       "platform": "Any",
         *       "sortHeading": "shuffle",
         *       "sortOrder": "descending",
         *       "sortOwnership": "any",
         *       "tag": "admin_exercise_row"
         *     },
         *     {
         *       "index": 4,
         *       "name": "Spotlight",
         *       "platform": "ThisPlatformSupported",
         *       "sortHeading": "updated",
         *       "sortOrder": "descending",
         *       "sortOwnership": "any",
         *       "tag": "admin_community_spotlight"
         *     },
         *     {
         *       "index": 5,
         *       "name": "Community Labs",
         *       "platform": "ThisPlatformSupported",
         *       "sortHeading": "labs",
         *       "sortOrder": "descending",
         *       "sortOwnership": "any"
         *     },
         *     {
         *       "index": 6,
         *       "name": "Active Cross Platform",
         *       "platform": "AllPlatforms",
         *       "sortHeading": "active",
         *       "sortOrder": "descending",
         *       "sortOwnership": "any"
         *     },
         *     {
         *       "index": 7,
         *       "name": "Active My Platform",
         *       "platform": "ThisPlatformOnly",
         *       "sortHeading": "active",
         *       "sortOrder": "descending",
         *       "sortOwnership": "any"
         *     },
         *     {
         *       "index": 8,
         *       "name": "Random",
         *       "platform": "ThisPlatformSupported",
         *       "sortHeading": "shuffle",
         *       "sortOrder": "descending",
         *       "sortOwnership": "any"
         *     },
         *     {
         *       "index": 9,
         *       "name": "Avatar Worlds",
         *       "platform": "ThisPlatformSupported",
         *       "sortHeading": "heat",
         *       "sortOrder": "descending",
         *       "sortOwnership": "any",
         *       "tag": "author_tag_avatar"
         *     },
         *     {
         *       "index": 10,
         *       "name": "Games",
         *       "platform": "ThisPlatformSupported",
         *       "sortHeading": "heat",
         *       "sortOrder": "descending",
         *       "sortOwnership": "any",
         *       "tag": "author_tag_game"
         *     },
         *     {
         *       "index": 11,
         *       "name": "Updated Recently",
         *       "platform": "ThisPlatformSupported",
         *       "sortHeading": "updated",
         *       "sortOrder": "descending",
         *       "sortOwnership": "any"
         *     },
         *     {
         *       "index": 12,
         *       "name": "New",
         *       "platform": "ThisPlatformSupported",
         *       "sortHeading": "publication",
         *       "sortOrder": "descending",
         *       "sortOwnership": "any"
         *     },
         *     {
         *       "index": 13,
         *       "name": "Recent",
         *       "platform": "ThisPlatformSupported",
         *       "sortHeading": "recent",
         *       "sortOrder": "descending",
         *       "sortOwnership": "any"
         *     },
         *     {
         *       "index": 14,
         *       "name": "Mine",
         *       "platform": "any",
         *       "sortHeading": "updated",
         *       "sortOrder": "descending",
         *       "sortOwnership": "mine"
         *     },
         *     {
         *       "index": 15,
         *       "name": "Classics",
         *       "platform": "ThisPlatformSupported",
         *       "sortHeading": "trending",
         *       "sortOrder": "descending",
         *       "sortOwnership": "any"
         *     }
         *   ],
         *   "events": {
         *     "distanceClose": 2,
         *     "distanceFactor": 100,
         *     "distanceFar": 80,
         *     "groupDistance": 3,
         *     "maximumBunchSize": 247,
         *     "notVisibleFactor": 100,
         *     "playerOrderBucketSize": 5,
         *     "playerOrderFactor": 55,
         *     "slowUpdateFactorThreshold": 25,
         *     "viewSegmentLength": 5
         *   },
         *   "gearDemoRoomId": "2282253502",
         *   "homeWorldId": "wrld_4432ea9b-729c-46e3-8eaf-846aa0a37fdd",
         *   "homepageRedirectTarget": "https://hello.vrchat.com",
         *   "hubWorldId": "wrld_ba913a96-fac4-4048-a062-9aa5db092812",
         *   "jobsEmail": "jobs@vrchat.com",
         *   "messageOfTheDay": "hello world",
         *   "moderationEmail": "moderation@vrchat.com",
         *   "moderationQueryPeriod": 60,
         *   "notAllowedToSelectAvatarInPrivateWorldMessage": "For security reasons, you're not yet allowed to select avatars in private worlds or upload content. Please continue to enjoy VRChat and we'll message you when you've been unlocked. Thanks and have fun!",
         *   "plugin": "no_kick_unlisted",
         *   "releaseAppVersionStandalone": "0.12.0p3",
         *   "releaseSdkUrl": "http://files.vrchat.cloud/sdk/VRCSDK-2019.09.18.12.05_Public.unitypackage",
         *   "releaseSdkVersion": "VRCSDK-2019.09.18.12.05_Public",
         *   "releaseServerVersionStandalone": "public_server_01",
         *   "sdkDeveloperFaqUrl": "https://docs.vrchat.com/docs/frequently-asked-questions#section-why-can-t-i-upload-content-yet-",
         *   "sdkDiscordUrl": "https://discord.gg/vrchat",
         *   "sdkNotAllowedToPublishMessage": "Welcome the VRChat SDK!\r\n\r\nBefore you can upload avatars or worlds to VRChat, you'll need to spend more time enjoying the app. We do this for security reasons, and so you can learn more about us.\r\n\r\nWhen you get the ability to upload, we will notify you via email and in VRChat. For now, you can learn and test on your own device.\r\n\r\nTo get started, check out the resources below.\r\n\r\nThank you for your patience, we can't wait to see what you'll build!",
         *   "sdkUnityVersion": "2019.4.30f1",
         *   "serverName": "prod-api-blue-house-fsm",
         *   "supportEmail": "support@vrchat.com",
         *   "timeOutWorldId": "wrld_5b89c79e-c340-4510-be1b-476e9fcdedcc",
         *   "tutorialWorldId": "wld_7d3d25ec-663e-406e-96a3-e2c4fc0d8104",
         *   "updateRateMsMaximum": 1000,
         *   "updateRateMsMinimum": 50,
         *   "updateRateMsNormal": 200,
         *   "updateRateMsUdonManual": 50,
         *   "uploadAnalysisPercent": 1,
         *   "urlList": [
         *     "drive.google.com",
         *     "facebook.com",
         *     "www.facebook.com",
         *     "nicovideo.jp",
         *     "www.nicovideo.jp",
         *     "live.nicovideo.jp",
         *     "live2.nicovideo.jp",
         *     "game.nicovideo.jp",
         *     "soundcloud.com",
         *     "tiktok.com",
         *     "www.tiktok.com",
         *     "twitch.tv",
         *     "www.twitch.tv",
         *     "vimeo.com",
         *     "player.vimeo.com",
         *     "vrchat.cloud",
         *     "youku.com",
         *     "v.youku.com",
         *     "youtube.com",
         *     "www.youtube.com",
         *     "youtu.be",
         *     "assets.vrchat.com",
         *     "www.v-market.work",
         *     "vket6.v-market.work",
         *     "mall.v-market.work",
         *     "cdn.v-market.work",
         *     "movie.cdn.v-market.work",
         *     "wrs.nedo.go.jp"
         *   ],
         *   "useReliableUdpForVoice": false,
         *   "userUpdatePeriod": 60,
         *   "userVerificationDelay": 5,
         *   "userVerificationRetry": 30,
         *   "userVerificationTimeout": 60,
         *   "viveWindowsUrl": "http://store.steampowered.com/app/438100/",
         *   "whiteListedAssetUrls": [
         *     "http://dbinj8iahsbec.cloudfront.net/plugins",
         *     "http://dbinj8iahsbec.cloudfront.net/",
         *     "https://dbinj8iahsbec.cloudfront.net/",
         *     "https://dev-api.vrchat.cloud/api/1/file/",
         *     "https://api.vrchat.cloud/api/1/file/",
         *     "https://files.vrchat.cloud/unmanaged/"
         *   ],
         *   "worldUpdatePeriod": 60,
         *   "player-url-resolver-hash": "E3-C6-63-C3-27-3F-1C-47-48-C6-A7-52-A1-53-03-A5-10-6C-45-37-B1-C3-14-70-BA-44-1F-AE-0E-B2-32-36",
         *   "player-url-resolver-version": "2021-05-16T00:00:00.000Z"
         * }
         */
        export interface APIConfig {
            /**
             * Unknown, probably voice optimization testing
             */
            VoiceEnableDegradation: boolean;
            /**
             * Unknown, probably voice optimization testing
             */
            VoiceEnableReceiverLimiting: boolean;
            /**
             * VRChat's office address
             */
            address: string;
            /**
             * Public Announcements
             */
            announcements: /**
             * APIConfigAnnouncement
             * Public Announcement
             */
            APIConfigAnnouncement[];
            /**
             * Game name
             */
            appName: string;
            /**
             * Build tag of the API server
             */
            buildVersionTag: string;
            /**
             * apiKey to be used for all other requests
             */
            clientApiKey: string;
            /**
             * Unknown
             */
            clientBPSCeiling: number;
            /**
             * Unknown
             */
            clientDisconnectTimeout: number;
            /**
             * Unknown
             */
            clientReservedPlayerBPS: number;
            /**
             * Unknown
             */
            clientSentCountAllowance: number;
            /**
             * VRChat's contact email
             */
            contactEmail: string;
            /**
             * VRChat's copyright-issues-related email
             */
            copyrightEmail: string;
            /**
             * Current version number of the Terms of Service
             * example:
             * 7
             */
            currentTOSVersion: number;
            defaultAvatar: /**
             * AvatarID
             * example:
             * avtr_912d66a4-4714-43b8-8407-7de2cafbf55b
             */
            AvatarID;
            deploymentGroup: /**
             * DeploymentGroup
             * Used to identify which API deployment cluster is currently responding.
             *
             * `blue` and `green` are used by Production.
             * `grape`and `cherry` are used during Development.
             *
             * [Blue Green Deployment by Martin Fowler](https://martinfowler.com/bliki/BlueGreenDeployment.html)
             */
            DeploymentGroup;
            /**
             * Version number for game development build
             */
            devAppVersionStandalone: string;
            /**
             * Developer Download link
             */
            devDownloadLinkWindows: string;
            /**
             * Link to download the development SDK, use downloadUrls instead
             */
            devSdkUrl: string;
            /**
             * Version of the development SDK
             */
            devSdkVersion: string;
            /**
             * Version number for server development build
             */
            devServerVersionStandalone: string;
            /**
             * Unknown, "dis" maybe for disconnect?
             */
            "dis-countdown": string; // date-time
            /**
             * Toggles if copying avatars should be disabled
             */
            disableAvatarCopying: boolean;
            /**
             * Toggles if avatar gating should be disabled. Avatar gating restricts uploading of avatars to people with the `system_avatar_access` Tag or `admin_avatar_access` Tag
             */
            disableAvatarGating: boolean;
            /**
             * Toggles if the Community Labs should be disabled
             */
            disableCommunityLabs: boolean;
            /**
             * Toggles if promotion out of Community Labs should be disabled
             */
            disableCommunityLabsPromotion: boolean;
            /**
             * Unknown
             */
            disableEmail: boolean;
            /**
             * Toggles if Analytics should be disabled.
             */
            disableEventStream: boolean;
            /**
             * Toggles if feedback gating should be disabled. Feedback gating restricts submission of feedback (reporting a World or User) to people with the `system_feedback_access` Tag.
             */
            disableFeedbackGating: boolean;
            /**
             * Unknown, probably toggles compilation of frontend web builds? So internal flag?
             */
            disableFrontendBuilds: boolean;
            /**
             * Unknown
             */
            disableHello: boolean;
            /**
             * Toggles if signing up for Subscriptions in Oculus is disabled or not.
             */
            disableOculusSubs: boolean;
            /**
             * Toggles if new user account registration should be disabled.
             */
            disableRegistration: boolean;
            /**
             * Toggles if Steam Networking should be disabled. VRChat these days uses Photon Unity Networking (PUN) instead.
             */
            disableSteamNetworking: boolean;
            /**
             * Toggles if 2FA should be disabled.
             */
            disableTwoFactorAuth: boolean;
            /**
             * Toggles if Udon should be universally disabled in-game.
             */
            disableUdon: boolean;
            /**
             * Toggles if account upgrading "linking with Steam/Oculus" should be disabled.
             */
            disableUpgradeAccount: boolean;
            /**
             * Download link for game on the Oculus Rift website.
             */
            downloadLinkWindows: string;
            downloadUrls: /**
             * APIConfigDownloadURLList
             * Download links for various development assets.
             */
            APIConfigDownloadURLList;
            /**
             * Array of DynamicWorldRow objects, used by the game to display the list of world rows
             */
            dynamicWorldRows: [
                /* DynamicContentRow */ DynamicContentRow,
                .../* DynamicContentRow */ DynamicContentRow[]
            ];
            events: /* APIConfigEvents */ APIConfigEvents;
            /**
             * Unknown
             */
            gearDemoRoomId: string;
            homeWorldId: /**
             * WorldID
             * WorldID be "offline" on User profiles if you are not friends with that user.
             * example:
             * wrld_ba913a96-fac4-4048-a062-9aa5db092812
             */
            WorldID;
            /**
             * Redirect target if you try to open the base API domain in your browser
             */
            homepageRedirectTarget: string;
            hubWorldId: /**
             * WorldID
             * WorldID be "offline" on User profiles if you are not friends with that user.
             * example:
             * wrld_ba913a96-fac4-4048-a062-9aa5db092812
             */
            WorldID;
            /**
             * VRChat's job application email
             */
            jobsEmail: string;
            /**
             * MOTD
             */
            messageOfTheDay: string;
            /**
             * VRChat's moderation related email
             */
            moderationEmail: string;
            /**
             * Unknown
             */
            moderationQueryPeriod: number;
            /**
             * Used in-game to notify a user they aren't allowed to select avatars in private worlds
             */
            notAllowedToSelectAvatarInPrivateWorldMessage: string;
            /**
             * Extra [plugin](https://doc.photonengine.com/en-us/server/current/plugins/manual) to run in each instance
             */
            plugin: string;
            /**
             * Version number for game release build
             */
            releaseAppVersionStandalone: string;
            /**
             * Link to download the release SDK
             */
            releaseSdkUrl: string;
            /**
             * Version of the release SDK
             */
            releaseSdkVersion: string;
            /**
             * Version number for server release build
             */
            releaseServerVersionStandalone: string;
            /**
             * Link to the developer FAQ
             */
            sdkDeveloperFaqUrl: string;
            /**
             * Link to the official VRChat Discord
             */
            sdkDiscordUrl: string;
            /**
             * Used in the SDK to notify a user they aren't allowed to upload avatars/worlds yet
             */
            sdkNotAllowedToPublishMessage: string;
            /**
             * Unity version supported by the SDK
             */
            sdkUnityVersion: string;
            /**
             * Server name of the API server currently responding
             */
            serverName: string;
            /**
             * VRChat's support email
             */
            supportEmail: string;
            timeOutWorldId: /**
             * WorldID
             * WorldID be "offline" on User profiles if you are not friends with that user.
             * example:
             * wrld_ba913a96-fac4-4048-a062-9aa5db092812
             */
            WorldID;
            tutorialWorldId: /**
             * WorldID
             * WorldID be "offline" on User profiles if you are not friends with that user.
             * example:
             * wrld_ba913a96-fac4-4048-a062-9aa5db092812
             */
            WorldID;
            /**
             * Unknown
             */
            updateRateMsMaximum: number;
            /**
             * Unknown
             */
            updateRateMsMinimum: number;
            /**
             * Unknown
             */
            updateRateMsNormal: number;
            /**
             * Unknown
             */
            updateRateMsUdonManual: number;
            /**
             * Unknown
             */
            uploadAnalysisPercent: number;
            /**
             * List of allowed URLs that bypass the "Allow untrusted URL's" setting in-game
             */
            urlList: string[];
            /**
             * Unknown
             */
            useReliableUdpForVoice: boolean;
            /**
             * Unknown
             */
            userUpdatePeriod: number;
            /**
             * Unknown
             */
            userVerificationDelay: number;
            /**
             * Unknown
             */
            userVerificationRetry: number;
            /**
             * Unknown
             */
            userVerificationTimeout: number;
            /**
             * Download link for game on the Steam website.
             */
            viveWindowsUrl: string;
            /**
             * List of allowed URLs that are allowed to host avatar assets
             */
            whiteListedAssetUrls: string[];
            /**
             * Unknown
             */
            worldUpdatePeriod: number;
            /**
             * Currently used youtube-dl.exe hash in SHA-256-delimited format
             */
            "player-url-resolver-hash": string;
            /**
             * Currently used youtube-dl.exe version
             */
            "player-url-resolver-version": string;
        }
        /**
         * APIConfigAnnouncement
         * Public Announcement
         */
        export interface APIConfigAnnouncement {
            /**
             * Announcement name
             */
            name: string;
            /**
             * Announcement text
             */
            text: string;
        }
        /**
         * APIConfigDownloadURLList
         * Download links for various development assets.
         */
        export interface APIConfigDownloadURLList {
            /**
             * Download link for legacy SDK2
             */
            sdk2: string;
            /**
             * Download link for SDK3 for Avatars
             */
            "sdk3-avatars": string;
            /**
             * Download link for SDK3 for Worlds
             */
            "sdk3-worlds": string;
            /**
             * Download link for the Creator Companion
             */
            vcc: string;
            /**
             * Download link for ???
             */
            bootstrap: string;
        }
        /**
         * APIConfigEvents
         */
        export interface APIConfigEvents {
            /**
             * Unknown
             */
            distanceClose: number;
            /**
             * Unknown
             */
            distanceFactor: number;
            /**
             * Unknown
             */
            distanceFar: number;
            /**
             * Unknown
             */
            groupDistance: number;
            /**
             * Unknown
             */
            maximumBunchSize: number;
            /**
             * Unknown
             */
            notVisibleFactor: number;
            /**
             * Unknown
             */
            playerOrderBucketSize: number;
            /**
             * Unknown
             */
            playerOrderFactor: number;
            /**
             * Unknown
             */
            slowUpdateFactorThreshold: number;
            /**
             * Unknown
             */
            viewSegmentLength: number;
        }
        /**
         * APIHealth
         */
        export interface APIHealth {
            ok: boolean;
            serverName: string;
            buildVersionTag: string;
        }
        /**
         * AccountDeletionLog
         */
        export interface AccountDeletionLog {
            /**
             * Typically "Deletion requested" or "Deletion canceled". Other messages like "Deletion completed" may exist, but are these are not possible to see as a regular user.
             * example:
             * Deletion requested
             */
            message?: string;
            /**
             * When the deletion is scheduled to happen, standard is 14 days after the request.
             */
            deletionScheduled?: string | null; // date-time
            /**
             * Date and time of the deletion request.
             */
            dateTime?: string; // date-time
        }
        /**
         * AddFavoriteRequest
         */
        export interface AddFavoriteRequest {
            type: /* FavoriteType */ FavoriteType;
            /**
             * Must be either AvatarID, WorldID or UserID.
             */
            favoriteId: string;
            /**
             * Tags indicate which group this favorite belongs to. Adding multiple groups makes it show up in all. Removing it from one in that case removes it from all.
             */
            tags: /**
             * Tag
             * Tags are a way to grant various access, assign restrictions or other kinds of metadata to various to objects such as worlds, users and avatars.
             *
             * System tags starting with `system_` are granted automatically by the system, while admin tags with `admin_` are granted manually. More prefixes such as `language_ ` (to indicate that a player can speak the tagged language), and `author_tag_` (provided by a world author for search and sorting) exist as well.
             */
            Tag[];
        }
        /**
         * AddGroupGalleryImageRequest
         */
        export interface AddGroupGalleryImageRequest {
            fileId: /**
             * FileID
             * example:
             * file_ce35d830-e20a-4df0-a6d4-5aaef4508044
             */
            FileID;
        }
        /**
         * Avatar
         *
         */
        export interface Avatar {
            /**
             * Not present from general serach `/avatars`, only on specific requests `/avatars/{avatarId}`.
             */
            assetUrl?: string;
            /**
             * Not present from general serach `/avatars`, only on specific requests `/avatars/{avatarId}`.
             * **Deprecation:** `Object` has unknown usage/fields, and is always empty. Use normal `Url` field instead.
             */
            assetUrlObject?: {
                [key: string]: any;
            };
            authorId: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            authorName: string;
            created_at: string; // date-time
            description: string;
            featured: boolean;
            id: /**
             * AvatarID
             * example:
             * avtr_912d66a4-4714-43b8-8407-7de2cafbf55b
             */
            AvatarID;
            imageUrl: string;
            name: string;
            releaseStatus: /**
             * ReleaseStatus
             * example:
             * public
             */
            ReleaseStatus;
            /**
             *
             */
            tags: /**
             * Tag
             * Tags are a way to grant various access, assign restrictions or other kinds of metadata to various to objects such as worlds, users and avatars.
             *
             * System tags starting with `system_` are granted automatically by the system, while admin tags with `admin_` are granted manually. More prefixes such as `language_ ` (to indicate that a player can speak the tagged language), and `author_tag_` (provided by a world author for search and sorting) exist as well.
             */
            Tag[];
            thumbnailImageUrl: string;
            unityPackageUrl: string;
            /**
             * **Deprecation:** `Object` has unknown usage/fields, and is always empty. Use normal `Url` field instead.
             */
            unityPackageUrlObject: {
                unityPackageUrl?: string;
            };
            unityPackages: [
                /**
                 * UnityPackage
                 *
                 * example:
                 * {
                 *   "assetUrl": "https://api.vrchat.cloud/api/1/file/file_cd0caa7b-69ba-4715-8dfe-7d667a9d2537/65/file",
                 *   "assetUrlObject": {},
                 *   "assetVersion": 4,
                 *   "created_at": "2020-09-10T06:13:27.777Z",
                 *   "id": "unp_52b12c39-4163-457d-a4a9-630e7aff1bff",
                 *   "platform": "standalonewindows",
                 *   "pluginUrl": "",
                 *   "pluginUrlObject": {},
                 *   "unitySortNumber": 20180414000,
                 *   "unityVersion": "2018.4.14f1"
                 * }
                 */
                UnityPackage,
                .../**
                 * UnityPackage
                 *
                 * example:
                 * {
                 *   "assetUrl": "https://api.vrchat.cloud/api/1/file/file_cd0caa7b-69ba-4715-8dfe-7d667a9d2537/65/file",
                 *   "assetUrlObject": {},
                 *   "assetVersion": 4,
                 *   "created_at": "2020-09-10T06:13:27.777Z",
                 *   "id": "unp_52b12c39-4163-457d-a4a9-630e7aff1bff",
                 *   "platform": "standalonewindows",
                 *   "pluginUrl": "",
                 *   "pluginUrlObject": {},
                 *   "unitySortNumber": 20180414000,
                 *   "unityVersion": "2018.4.14f1"
                 * }
                 */
                UnityPackage[]
            ];
            updated_at: string; // date-time
            /**
             * example:
             * 68
             */
            version: number;
        }
        /**
         * AvatarID
         * example:
         * avtr_912d66a4-4714-43b8-8407-7de2cafbf55b
         */
        export type AvatarID = string;
        /**
         * BanGroupMemberRequest
         */
        export interface BanGroupMemberRequest {
            userId: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
        }
        /**
         * CreateAvatarRequest
         */
        export interface CreateAvatarRequest {
            assetUrl?: string;
            id?: /**
             * AvatarID
             * example:
             * avtr_912d66a4-4714-43b8-8407-7de2cafbf55b
             */
            AvatarID;
            name: string;
            description?: string;
            /**
             *
             */
            tags?: /**
             * Tag
             * Tags are a way to grant various access, assign restrictions or other kinds of metadata to various to objects such as worlds, users and avatars.
             *
             * System tags starting with `system_` are granted automatically by the system, while admin tags with `admin_` are granted manually. More prefixes such as `language_ ` (to indicate that a player can speak the tagged language), and `author_tag_` (provided by a world author for search and sorting) exist as well.
             */
            Tag[];
            imageUrl: string;
            releaseStatus?: /**
             * ReleaseStatus
             * example:
             * public
             */
            ReleaseStatus;
            version?: number;
            unityPackageUrl?: string;
        }
        /**
         * CreateFileRequest
         */
        export interface CreateFileRequest {
            name: string;
            mimeType: /**
             * MIMEType
             * example:
             * image/jpeg
             */
            MIMEType;
            extension: string;
            /**
             *
             */
            tags?: /**
             * Tag
             * Tags are a way to grant various access, assign restrictions or other kinds of metadata to various to objects such as worlds, users and avatars.
             *
             * System tags starting with `system_` are granted automatically by the system, while admin tags with `admin_` are granted manually. More prefixes such as `language_ ` (to indicate that a player can speak the tagged language), and `author_tag_` (provided by a world author for search and sorting) exist as well.
             */
            Tag[];
        }
        /**
         * CreateFileVersionRequest
         */
        export interface CreateFileVersionRequest {
            signatureMd5: string;
            signatureSizeInBytes: number;
            fileMd5?: string;
            fileSizeInBytes?: number;
        }
        /**
         * CreateGroupAnnouncementRequest
         */
        export interface CreateGroupAnnouncementRequest {
            /**
             * Announcement title
             * example:
             * Event is starting soon!
             */
            title: string;
            /**
             * Announcement text
             * example:
             * Come join us for the event!
             */
            text?: string;
            imageId?: /**
             * FileID
             * example:
             * file_ce35d830-e20a-4df0-a6d4-5aaef4508044
             */
            FileID;
            /**
             * Send notification to group members.
             * example:
             * false
             */
            sendNotification?: boolean;
        }
        /**
         * CreateGroupGalleryRequest
         */
        export interface CreateGroupGalleryRequest {
            /**
             * Name of the gallery.
             * example:
             * Example Gallery
             */
            name: string;
            /**
             * Description of the gallery.
             * example:
             * Example Description
             */
            description?: string;
            /**
             * Whether the gallery is members only.
             * example:
             * false
             */
            membersOnly?: boolean;
            /**
             *
             */
            roleIdsToView?: /**
             * GroupRoleID
             * example:
             * grol_459d3911-f672-44bc-b84d-e54ffe7960fe
             */
            GroupRoleID[] | null;
            /**
             *
             */
            roleIdsToSubmit?: /**
             * GroupRoleID
             * example:
             * grol_459d3911-f672-44bc-b84d-e54ffe7960fe
             */
            GroupRoleID[] | null;
            /**
             *
             */
            roleIdsToAutoApprove?: /**
             * GroupRoleID
             * example:
             * grol_459d3911-f672-44bc-b84d-e54ffe7960fe
             */
            GroupRoleID[] | null;
            /**
             *
             */
            roleIdsToManage?: /**
             * GroupRoleID
             * example:
             * grol_459d3911-f672-44bc-b84d-e54ffe7960fe
             */
            GroupRoleID[] | null;
        }
        /**
         * CreateGroupInviteRequest
         */
        export interface CreateGroupInviteRequest {
            userId: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            confirmOverrideBlock?: boolean;
        }
        /**
         * CreateGroupRequest
         */
        export interface CreateGroupRequest {
            name: string;
            shortCode: string;
            description?: string;
            joinState?: /* GroupJoinState */ GroupJoinState;
            iconId?: string | null;
            bannerId?: string | null;
            privacy?: /* GroupPrivacy */ GroupPrivacy;
            roleTemplate: /* GroupRoleTemplate */ GroupRoleTemplate;
        }
        /**
         * CreateGroupRequest
         */
        export interface CreateGroupRoleRequest {
            id?: string;
            name?: string;
            description?: string;
            isSelfAssignable?: boolean;
            permissions?: string[];
        }
        /**
         * CreateWorldRequest
         */
        export interface CreateWorldRequest {
            assetUrl: string;
            assetVersion?: number;
            authorId?: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            authorName?: string;
            /**
             * example:
             * 8
             */
            capacity?: number;
            description?: string;
            id?: /**
             * WorldID
             * WorldID be "offline" on User profiles if you are not friends with that user.
             * example:
             * wrld_ba913a96-fac4-4048-a062-9aa5db092812
             */
            WorldID;
            imageUrl: string;
            name: string;
            platform?: /**
             * Platform
             * This can be `standalonewindows` or `android`, but can also pretty much be any random Unity verison such as `2019.2.4-801-Release` or `2019.2.2-772-Release` or even `unknownplatform`.
             * example:
             * standalonewindows
             */
            Platform;
            releaseStatus?: /**
             * ReleaseStatus
             * example:
             * public
             */
            ReleaseStatus;
            /**
             *
             */
            tags?: /**
             * Tag
             * Tags are a way to grant various access, assign restrictions or other kinds of metadata to various to objects such as worlds, users and avatars.
             *
             * System tags starting with `system_` are granted automatically by the system, while admin tags with `admin_` are granted manually. More prefixes such as `language_ ` (to indicate that a player can speak the tagged language), and `author_tag_` (provided by a world author for search and sorting) exist as well.
             */
            Tag[];
            unityPackageUrl?: string;
            /**
             * example:
             * 2018.4.20f1
             */
            unityVersion?: string;
        }
        /**
         * CurrentAvatarImageUrl
         * When profilePicOverride is not empty, use it instead.
         * example:
         * https://api.vrchat.cloud/api/1/file/file_ae46d521-7281-4b38-b365-804b32a1d6a7/1/file
         */
        export type CurrentAvatarImageUrl = string;
        /**
         * CurrentAvatarThumbnailImageUrl
         * When profilePicOverride is not empty, use it instead.
         * example:
         * https://api.vrchat.cloud/api/1/image/file_aae83ed9-d42d-4d72-9f4b-9f1e41ed17e1/1/256
         */
        export type CurrentAvatarThumbnailImageUrl = string;
        /**
         * CurrentUser
         */
        export interface CurrentUser {
            /**
             * example:
             * 7
             */
            acceptedTOSVersion: number;
            /**
             * example:
             * 0
             */
            acceptedPrivacyVersion?: number;
            accountDeletionDate?: string | null; // date
            /**
             *
             */
            accountDeletionLog?: /* AccountDeletionLog */ AccountDeletionLog[] | null;
            /**
             *
             */
            activeFriends?: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID[];
            allowAvatarCopying: boolean;
            bio: string;
            /**
             *
             */
            bioLinks: string[];
            currentAvatar: /**
             * AvatarID
             * example:
             * avtr_912d66a4-4714-43b8-8407-7de2cafbf55b
             */
            AvatarID;
            currentAvatarAssetUrl: string;
            currentAvatarImageUrl: /**
             * CurrentAvatarImageUrl
             * When profilePicOverride is not empty, use it instead.
             * example:
             * https://api.vrchat.cloud/api/1/file/file_ae46d521-7281-4b38-b365-804b32a1d6a7/1/file
             */
            CurrentAvatarImageUrl;
            currentAvatarThumbnailImageUrl: /**
             * CurrentAvatarThumbnailImageUrl
             * When profilePicOverride is not empty, use it instead.
             * example:
             * https://api.vrchat.cloud/api/1/image/file_aae83ed9-d42d-4d72-9f4b-9f1e41ed17e1/1/256
             */
            CurrentAvatarThumbnailImageUrl;
            currentAvatarTags?: /**
             * Tag
             * Tags are a way to grant various access, assign restrictions or other kinds of metadata to various to objects such as worlds, users and avatars.
             *
             * System tags starting with `system_` are granted automatically by the system, while admin tags with `admin_` are granted manually. More prefixes such as `language_ ` (to indicate that a player can speak the tagged language), and `author_tag_` (provided by a world author for search and sorting) exist as well.
             */
            Tag[];
            date_joined: string; // date
            developerType: /**
             * DeveloperType
             * "none" User is a normal user
             * "trusted" Unknown
             * "internal" Is a VRChat Developer
             * "moderator" Is a VRChat Moderator
             *
             * Staff can hide their developerType at will.
             */
            DeveloperType;
            displayName: string;
            emailVerified: boolean;
            fallbackAvatar?: /**
             * AvatarID
             * example:
             * avtr_912d66a4-4714-43b8-8407-7de2cafbf55b
             */
            AvatarID;
            /**
             * Always empty array.
             */
            friendGroupNames: string[];
            friendKey: string;
            friends: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID[];
            hasBirthday: boolean;
            hideContentFilterSettings?: boolean;
            userLanguage?: string | null;
            userLanguageCode?: string | null;
            hasEmail: boolean;
            hasLoggedInFromClient: boolean;
            hasPendingEmail: boolean;
            homeLocation: /**
             * WorldID
             * WorldID be "offline" on User profiles if you are not friends with that user.
             * example:
             * wrld_ba913a96-fac4-4048-a062-9aa5db092812
             */
            WorldID;
            id: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            isFriend: boolean;
            last_activity?: string; // date-time
            last_login: string; // date-time
            last_platform: /**
             * Platform
             * This can be `standalonewindows` or `android`, but can also pretty much be any random Unity verison such as `2019.2.4-801-Release` or `2019.2.2-772-Release` or even `unknownplatform`.
             * example:
             * standalonewindows
             */
            Platform;
            obfuscatedEmail: string;
            obfuscatedPendingEmail: string;
            oculusId: string;
            googleId?: string;
            picoId?: string;
            viveId?: string;
            offlineFriends?: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID[];
            onlineFriends?: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID[];
            /**
             *
             */
            pastDisplayNames: /* PastDisplayName */ PastDisplayName[];
            presence?: /* CurrentUserPresence */ CurrentUserPresence;
            profilePicOverride: string;
            state: /**
             * UserState
             * * "online" User is online in VRChat
             * * "active" User is online, but not in VRChat
             * * "offline" User is offline
             *
             * Always offline when returned through `getCurrentUser` (/auth/user).
             */
            UserState;
            status: /**
             * UserStatus
             * Defines the User's current status, for example "ask me", "join me" or "offline. This status is a combined indicator of their online activity and privacy preference.
             */
            UserStatus;
            statusDescription: string;
            statusFirstTime: boolean;
            statusHistory: string[];
            steamDetails: {
                [key: string]: any;
            };
            steamId: string;
            tags: /**
             * Tag
             * Tags are a way to grant various access, assign restrictions or other kinds of metadata to various to objects such as worlds, users and avatars.
             *
             * System tags starting with `system_` are granted automatically by the system, while admin tags with `admin_` are granted manually. More prefixes such as `language_ ` (to indicate that a player can speak the tagged language), and `author_tag_` (provided by a world author for search and sorting) exist as well.
             */
            Tag[];
            twoFactorAuthEnabled: boolean;
            twoFactorAuthEnabledDate?: string | null; // date-time
            unsubscribe: boolean;
            updated_at?: string; // date-time
            userIcon: string;
            /**
             * -| **DEPRECATED:** VRChat API no longer return usernames of other users. [See issue by Tupper for more information](https://github.com/pypy-vrc/VRCX/issues/429).
             */
            username?: string;
        }
        /**
         * CurrentUserPresence
         */
        export interface CurrentUserPresence {
            avatarThumbnail?: string | null;
            displayName?: string;
            groups?: /**
             * GroupID
             * example:
             * grp_71a7ff59-112c-4e78-a990-c7cc650776e5
             */
            GroupID[] | null;
            id?: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            instance?: string | null;
            /**
             * either an InstanceType or an empty string
             */
            instanceType?: string | null;
            isRejoining?: string | null;
            /**
             * either a Platform or an empty string
             */
            platform?: string | null;
            profilePicOverride?: string | null;
            /**
             * either a UserStatus or empty string
             */
            status?: string | null;
            travelingToInstance?: string | null;
            travelingToWorld?: /**
             * WorldID
             * WorldID be "offline" on User profiles if you are not friends with that user.
             * example:
             * wrld_ba913a96-fac4-4048-a062-9aa5db092812
             */
            WorldID;
            world?: /**
             * WorldID
             * WorldID be "offline" on User profiles if you are not friends with that user.
             * example:
             * wrld_ba913a96-fac4-4048-a062-9aa5db092812
             */
            WorldID;
        }
        /**
         * DeploymentGroup
         * Used to identify which API deployment cluster is currently responding.
         *
         * `blue` and `green` are used by Production.
         * `grape`and `cherry` are used during Development.
         *
         * [Blue Green Deployment by Martin Fowler](https://martinfowler.com/bliki/BlueGreenDeployment.html)
         */
        export type DeploymentGroup = "blue" | "green" | "grape" | "cherry";
        /**
         * DeveloperType
         * "none" User is a normal user
         * "trusted" Unknown
         * "internal" Is a VRChat Developer
         * "moderator" Is a VRChat Moderator
         *
         * Staff can hide their developerType at will.
         */
        export type DeveloperType = "none" | "trusted" | "internal" | "moderator";
        /**
         * DynamicContentRow
         */
        export interface DynamicContentRow {
            index?: number;
            name: string;
            /**
             * Usually "ThisPlatformSupported", but can also be other values such as "all" or platform specific identifiers.
             */
            platform: string;
            sortHeading: string;
            sortOrder: string;
            sortOwnership: string;
            /**
             * Tag to filter content for this row.
             */
            tag?: string;
            /**
             * Type is not present if it is a world.
             * example:
             * avatar
             */
            type?: string;
        }
        /**
         * Error
         */
        export interface Error {
            error?: /* Response */ Response;
        }
        /**
         * Favorite
         *
         */
        export interface Favorite {
            /**
             * MUST be either AvatarID, UserID or WorldID.
             */
            favoriteId: string;
            id: /**
             * FavoriteID
             * example:
             * fvrt_9568d189-8776-44a5-a8c8-defc981e44de
             */
            FavoriteID;
            /**
             *
             */
            tags: /**
             * Tag
             * Tags are a way to grant various access, assign restrictions or other kinds of metadata to various to objects such as worlds, users and avatars.
             *
             * System tags starting with `system_` are granted automatically by the system, while admin tags with `admin_` are granted manually. More prefixes such as `language_ ` (to indicate that a player can speak the tagged language), and `author_tag_` (provided by a world author for search and sorting) exist as well.
             */
            Tag[];
            type: /* FavoriteType */ FavoriteType;
        }
        /**
         * FavoriteGroup
         *
         */
        export interface FavoriteGroup {
            displayName: string;
            id: /**
             * FavoriteGroupID
             * example:
             * fvgrp_8a02a44b-dc3a-4a9a-bc77-77fa37996fc7
             */
            FavoriteGroupID;
            name: string;
            ownerDisplayName: string;
            ownerId: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            /**
             *
             */
            tags: /**
             * Tag
             * Tags are a way to grant various access, assign restrictions or other kinds of metadata to various to objects such as worlds, users and avatars.
             *
             * System tags starting with `system_` are granted automatically by the system, while admin tags with `admin_` are granted manually. More prefixes such as `language_ ` (to indicate that a player can speak the tagged language), and `author_tag_` (provided by a world author for search and sorting) exist as well.
             */
            Tag[];
            type: /* FavoriteType */ FavoriteType;
            visibility: /**
             * FavoriteGroupVisibility
             * example:
             * private
             */
            FavoriteGroupVisibility;
        }
        /**
         * FavoriteGroupID
         * example:
         * fvgrp_8a02a44b-dc3a-4a9a-bc77-77fa37996fc7
         */
        export type FavoriteGroupID = string;
        /**
         * FavoriteGroupVisibility
         * example:
         * private
         */
        export type FavoriteGroupVisibility = "private" | "friends" | "public";
        /**
         * FavoriteID
         * example:
         * fvrt_9568d189-8776-44a5-a8c8-defc981e44de
         */
        export type FavoriteID = string;
        /**
         * FavoriteType
         */
        export type FavoriteType = "world" | "friend" | "avatar";
        /**
         * File
         *
         */
        export interface File {
            /**
             * example:
             * .unitypackage
             */
            extension: string;
            id: /**
             * FileID
             * example:
             * file_ce35d830-e20a-4df0-a6d4-5aaef4508044
             */
            FileID;
            mimeType: /**
             * MIMEType
             * example:
             * image/jpeg
             */
            MIMEType;
            /**
             *
             * example:
             * Example File
             */
            name: string;
            ownerId: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            /**
             *
             */
            tags: /**
             * Tag
             * Tags are a way to grant various access, assign restrictions or other kinds of metadata to various to objects such as worlds, users and avatars.
             *
             * System tags starting with `system_` are granted automatically by the system, while admin tags with `admin_` are granted manually. More prefixes such as `language_ ` (to indicate that a player can speak the tagged language), and `author_tag_` (provided by a world author for search and sorting) exist as well.
             */
            Tag[];
            /**
             *
             */
            versions: [
                /**
                 * FileVersion
                 *
                 */
                FileVersion,
                .../**
                 * FileVersion
                 *
                 */
                FileVersion[]
            ];
        }
        /**
         * FileData
         *
         */
        export interface FileData {
            category: "multipart" | "queued" | "simple";
            fileName: string;
            md5: string;
            sizeInBytes: number;
            status: /**
             * FileStatus
             * example:
             * complete
             */
            FileStatus;
            uploadId: string;
            url: string;
        }
        /**
         * FileID
         * example:
         * file_ce35d830-e20a-4df0-a6d4-5aaef4508044
         */
        export type FileID = string;
        /**
         * FileStatus
         * example:
         * complete
         */
        export type FileStatus = "waiting" | "complete" | "none" | "queued";
        /**
         * FileUploadURL
         *
         */
        export interface FileUploadURL {
            /**
             *
             */
            url: string;
        }
        /**
         * FileVersion
         *
         */
        export interface FileVersion {
            created_at: string; // date-time
            /**
             * Usually only present if `true`
             */
            deleted?: boolean;
            delta?: /**
             * FileData
             *
             */
            FileData;
            file?: /**
             * FileData
             *
             */
            FileData;
            signature?: /**
             * FileData
             *
             */
            FileData;
            status: /**
             * FileStatus
             * example:
             * complete
             */
            FileStatus;
            /**
             * Incremental version counter, can only be increased.
             */
            version: number;
        }
        /**
         * FileVersionUploadStatus
         *
         */
        export interface FileVersionUploadStatus {
            /**
             * example:
             * xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx_xxxxxxxxxxxxxxxxxxxxxxxx.xxxxxxx_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx..xxxxxxxxxxxxxxxxxxxxxxx
             */
            uploadId: string;
            /**
             * example:
             * Avatar-MyAvatar-Un.file_00000000-0000-0000-0000-000000000000.1.unitypackage
             */
            fileName: string;
            /**
             * example:
             * 0
             */
            nextPartNumber: number;
            /**
             * example:
             * 1000
             */
            maxParts: number;
            parts: {
                [key: string]: any;
            }[];
            /**
             * Unknown
             */
            etags: {
                [key: string]: any;
            }[];
        }
        /**
         * FinishFileDataUploadRequest
         *
         */
        export interface FinishFileDataUploadRequest {
            /**
             * Array of ETags uploaded.
             */
            etags?: [
                string,
                ...string[]
            ];
            /**
             * Always a zero in string form, despite how many parts uploaded.
             * example:
             * 0
             */
            nextPartNumber: string;
            /**
             * Always a zero in string form, despite how many parts uploaded.
             * example:
             * 0
             */
            maxParts: string;
        }
        /**
         * FriendStatus
         */
        export interface FriendStatus {
            incomingRequest: boolean;
            isFriend: boolean;
            outgoingRequest: boolean;
        }
        /**
         * Group
         */
        export interface Group {
            id?: /**
             * GroupID
             * example:
             * grp_71a7ff59-112c-4e78-a990-c7cc650776e5
             */
            GroupID;
            name?: string;
            shortCode?: /**
             * GroupShortCode
             * example:
             * ABC123
             */
            GroupShortCode;
            discriminator?: /**
             * GroupDiscriminator
             * example:
             * 1234
             */
            GroupDiscriminator;
            description?: string;
            iconUrl?: string | null;
            bannerUrl?: string | null;
            privacy?: /* GroupPrivacy */ GroupPrivacy;
            ownerId?: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            rules?: string | null;
            links?: string[];
            languages?: string[];
            iconId?: string | null;
            bannerId?: string | null;
            memberCount?: number;
            memberCountSyncedAt?: string; // date-time
            isVerified?: boolean;
            joinState?: /* GroupJoinState */ GroupJoinState;
            /**
             *
             */
            tags?: /**
             * Tag
             * Tags are a way to grant various access, assign restrictions or other kinds of metadata to various to objects such as worlds, users and avatars.
             *
             * System tags starting with `system_` are granted automatically by the system, while admin tags with `admin_` are granted manually. More prefixes such as `language_ ` (to indicate that a player can speak the tagged language), and `author_tag_` (provided by a world author for search and sorting) exist as well.
             */
            Tag[];
            /**
             *
             */
            galleries?: /* GroupMember */ GroupGallery[];
            createdAt?: string; // date-time
            onlineMemberCount?: number;
            membershipStatus?: /**
             * example:
             * member
             */
            GroupMemberStatus;
            myMember?: /* GroupMyMember */ GroupMyMember;
            /**
             * Only returned if ?includeRoles=true is specified.
             */
            roles?: /* GroupRole */ GroupRole[] | null;
        }
        /**
         * GroupAnnouncement
         */
        export interface GroupAnnouncement {
            id?: /**
             * GroupAnnouncementID
             * example:
             * gpos_71a7ff59-112c-4e78-a990-c7cc650776e5
             */
            GroupAnnouncementID;
            groupId?: /**
             * GroupID
             * example:
             * grp_71a7ff59-112c-4e78-a990-c7cc650776e5
             */
            GroupID;
            authorId?: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            title?: string | null;
            text?: string | null;
            imageId?: /**
             * FileID
             * example:
             * file_ce35d830-e20a-4df0-a6d4-5aaef4508044
             */
            FileID;
            imageUrl?: string | null;
            createdAt?: string | null; // date-time
            updatedAt?: string | null; // date-time
        }
        /**
         * GroupAnnouncementID
         * example:
         * gpos_71a7ff59-112c-4e78-a990-c7cc650776e5
         */
        export type GroupAnnouncementID = string;
        /**
         * GroupAuditLogEntry
         */
        export interface GroupAuditLogEntry {
            id?: /**
             * GroupAuditLogID
             * example:
             * gaud_71a7ff59-112c-4e78-a990-c7cc650776e5
             */
            GroupAuditLogID;
            created_at?: string; // date-time
            groupId?: /**
             * GroupID
             * example:
             * grp_71a7ff59-112c-4e78-a990-c7cc650776e5
             */
            GroupID;
            actorId?: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            actorDisplayname?: string;
            /**
             * Typically GroupID or GroupRoleID, but could be other types of IDs.
             */
            targetId?: string;
            /**
             * The type of event that occurred. This is a string that is prefixed with the type of object that the event occurred on. For example, a group role update event would be prefixed with `group.role`.
             * example:
             * group.role.update
             */
            eventType?: string;
            /**
             * A human-readable description of the event.
             * example:
             * Group role updated
             */
            description?: string;
            /**
             * The data associated with the event. The format of this data is dependent on the event type.
             * example:
             * {
             *   "description": {
             *     "old": "My exciting new group.  It's pretty nifty!",
             *     "new": "My exciting new group. It's pretty nifty!"
             *   },
             *   "joinState": {
             *     "old": "closed",
             *     "new": "request"
             *   }
             * }
             */
            data?: {
                [key: string]: any;
            };
        }
        /**
         * GroupAuditLogID
         * example:
         * gaud_71a7ff59-112c-4e78-a990-c7cc650776e5
         */
        export type GroupAuditLogID = string;
        /**
         * GroupDiscriminator
         * example:
         * 1234
         */
        export type GroupDiscriminator = string;
        /**
         * GroupMember
         */
        export interface GroupGallery {
            id?: /**
             * GroupGalleryID
             * example:
             * ggal_a03a4b55-4ca6-4490-9519-40ba6351a233
             */
            GroupGalleryID;
            /**
             * Name of the gallery.
             * example:
             * Example Gallery
             */
            name?: string;
            /**
             * Description of the gallery.
             * example:
             * Example Description
             */
            description?: string;
            /**
             * Whether the gallery is members only.
             * example:
             * false
             */
            membersOnly?: boolean;
            /**
             *
             */
            roleIdsToView?: /**
             * GroupRoleID
             * example:
             * grol_459d3911-f672-44bc-b84d-e54ffe7960fe
             */
            GroupRoleID[] | null;
            /**
             *
             */
            roleIdsToSubmit?: /**
             * GroupRoleID
             * example:
             * grol_459d3911-f672-44bc-b84d-e54ffe7960fe
             */
            GroupRoleID[] | null;
            /**
             *
             */
            roleIdsToAutoApprove?: /**
             * GroupRoleID
             * example:
             * grol_459d3911-f672-44bc-b84d-e54ffe7960fe
             */
            GroupRoleID[] | null;
            /**
             *
             */
            roleIdsToManage?: /**
             * GroupRoleID
             * example:
             * grol_459d3911-f672-44bc-b84d-e54ffe7960fe
             */
            GroupRoleID[] | null;
            createdAt?: string; // date-time
            updatedAt?: string; // date-time
        }
        /**
         * GroupGalleryID
         * example:
         * ggal_a03a4b55-4ca6-4490-9519-40ba6351a233
         */
        export type GroupGalleryID = string;
        /**
         * GroupGalleryImage
         */
        export interface GroupGalleryImage {
            id?: /**
             * GroupGalleryImageID
             * example:
             * ggim_71a7ff59-112c-4e78-a990-c7cc650776e5
             */
            GroupGalleryImageID;
            groupId?: /**
             * GroupID
             * example:
             * grp_71a7ff59-112c-4e78-a990-c7cc650776e5
             */
            GroupID;
            galleryId?: /**
             * GroupGalleryID
             * example:
             * ggal_a03a4b55-4ca6-4490-9519-40ba6351a233
             */
            GroupGalleryID;
            fileId?: /**
             * FileID
             * example:
             * file_ce35d830-e20a-4df0-a6d4-5aaef4508044
             */
            FileID;
            /**
             * example:
             * https://api.vrchat.cloud/api/1/file/file_ce35d830-e20a-4df0-a6d4-5aaef4508044/1/file
             */
            imageUrl?: string; // uri
            createdAt?: string; // date-time
            submittedByUserId?: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            /**
             * example:
             * true
             */
            approved?: boolean;
            approvedByUserId?: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            approvedAt?: string; // date-time
        }
        /**
         * GroupGalleryImageID
         * example:
         * ggim_71a7ff59-112c-4e78-a990-c7cc650776e5
         */
        export type GroupGalleryImageID = string;
        /**
         * GroupID
         * example:
         * grp_71a7ff59-112c-4e78-a990-c7cc650776e5
         */
        export type GroupID = string;
        /**
         * GroupJoinState
         */
        export type GroupJoinState = "closed" | "invite" | "request" | "open";
        /**
         * GroupLimitedMember
         */
        export interface GroupLimitedMember {
            id?: /**
             * GroupMemberID
             * example:
             * gmem_95cdb3b4-4643-4eb6-bdab-46a4e1e5ce37
             */
            GroupMemberID;
            groupId?: /**
             * GroupID
             * example:
             * grp_71a7ff59-112c-4e78-a990-c7cc650776e5
             */
            GroupID;
            userId?: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            isRepresenting?: boolean;
        }
        /**
         * GroupMember
         */
        export interface GroupMember {
            id?: /**
             * GroupMemberID
             * example:
             * gmem_95cdb3b4-4643-4eb6-bdab-46a4e1e5ce37
             */
            GroupMemberID;
            groupId?: /**
             * GroupID
             * example:
             * grp_71a7ff59-112c-4e78-a990-c7cc650776e5
             */
            GroupID;
            userId?: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            /**
             * Whether the user is representing the group. This makes the group show up above the name tag in-game.
             * example:
             * true
             */
            isRepresenting?: boolean;
            user?: /**
             * GroupMemberLimitedUser
             * Only visible via the /groups/:groupId/members endpoint, **not** when fetching a specific user.
             */
            GroupMemberLimitedUser;
            roleIds?: /**
             * GroupRoleID
             * example:
             * grol_459d3911-f672-44bc-b84d-e54ffe7960fe
             */
            GroupRoleID[];
            joinedAt?: string; // date-time
            /**
             * example:
             * member
             */
            membershipStatus?: string;
            /**
             * example:
             * visible
             */
            visibility?: string;
            isSubscribedToAnnouncements?: boolean;
            /**
             * Only visible via the /groups/:groupId/members endpoint, **not** when fetching a specific user.
             */
            createdAt?: string | null; // date-time
            /**
             * Only visible via the /groups/:groupId/members endpoint, **not** when fetching a specific user.
             */
            bannedAt?: string | null; // date-time
            /**
             * Only visible via the /groups/:groupId/members endpoint, **not** when fetching a specific user.
             */
            managerNotes?: string | null;
        }
        /**
         * GroupMemberID
         * example:
         * gmem_95cdb3b4-4643-4eb6-bdab-46a4e1e5ce37
         */
        export type GroupMemberID = string;
        /**
         * GroupMemberLimitedUser
         * Only visible via the /groups/:groupId/members endpoint, **not** when fetching a specific user.
         */
        export interface GroupMemberLimitedUser {
            id?: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            displayName?: string;
            thumbnailUrl?: string;
            iconUrl?: string;
        }
        /**
         * example:
         * member
         */
        export type GroupMemberStatus = "inactive" | "member" | "requested" | "invited";
        /**
         * GroupMyMember
         */
        export interface GroupMyMember {
            id?: /**
             * GroupMemberID
             * example:
             * gmem_95cdb3b4-4643-4eb6-bdab-46a4e1e5ce37
             */
            GroupMemberID;
            groupId?: /**
             * GroupID
             * example:
             * grp_71a7ff59-112c-4e78-a990-c7cc650776e5
             */
            GroupID;
            userId?: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            roleIds?: /**
             * GroupRoleID
             * example:
             * grol_459d3911-f672-44bc-b84d-e54ffe7960fe
             */
            GroupRoleID[];
            managerNotes?: string;
            /**
             * example:
             * member
             */
            membershipStatus?: string;
            isSubscribedToAnnouncements?: boolean;
            /**
             * example:
             * visible
             */
            visibility?: string;
            isRepresenting?: boolean;
            joinedAt?: string; // date-time
            bannedAt?: string | null;
            has2FA?: boolean;
            permissions?: string[];
        }
        /**
         * GroupPermission
         * A permission that can be granted to a role in a group.
         */
        export interface GroupPermission {
            /**
             * The name of the permission.
             * example:
             * group-data-manage
             */
            name?: string;
            /**
             * The display name of the permission.
             * example:
             * Manage Group Data
             */
            displayName?: string;
            /**
             * Human-readable description of the permission.
             * example:
             * Allows role to edit group details (name, description, joinState, initialRoles, etc).
             */
            help?: string;
            /**
             * Whether this permission is a "management" permission.
             * example:
             * true
             */
            isManagementPermission?: boolean;
            /**
             * Whether the user is allowed to add this permission to a role.
             * example:
             * true
             */
            allowedToAdd?: boolean;
        }
        /**
         * GroupPrivacy
         */
        export type GroupPrivacy = "default" | "private";
        /**
         * GroupRole
         */
        export interface GroupRole {
            id?: /**
             * GroupRoleID
             * example:
             * grol_459d3911-f672-44bc-b84d-e54ffe7960fe
             */
            GroupRoleID;
            groupId?: /**
             * GroupID
             * example:
             * grp_71a7ff59-112c-4e78-a990-c7cc650776e5
             */
            GroupID;
            name?: string;
            description?: string;
            isSelfAssignable?: boolean;
            permissions?: string[];
            isManagementRole?: boolean;
            requiresTwoFactor?: boolean;
            requiresPurchase?: boolean;
            order?: number;
            createdAt?: string; // date-time
            updatedAt?: string; // date-time
        }
        /**
         * GroupRoleID
         * example:
         * grol_459d3911-f672-44bc-b84d-e54ffe7960fe
         */
        export type GroupRoleID = string;
        /**
         * GroupRoleIDList
         *
         */
        export type GroupRoleIDList = /**
         * GroupRoleID
         * example:
         * grol_459d3911-f672-44bc-b84d-e54ffe7960fe
         */
        GroupRoleID[];
        /**
         * GroupRoleTemplate
         */
        export type GroupRoleTemplate = "default" | "managedFree" | "managedInvite" | "managedRequest";
        /**
         * GroupShortCode
         * example:
         * ABC123
         */
        export type GroupShortCode = string;
        /**
         * GroupUserVisibility
         * example:
         * visible
         */
        export type GroupUserVisibility = "visible" | "hidden" | "friends";
        /**
         * InfoPush
         *
         */
        export interface InfoPush {
            /**
             * example:
             * launch-beta
             */
            id: string;
            isEnabled: boolean;
            releaseStatus: /**
             * ReleaseStatus
             * example:
             * public
             */
            ReleaseStatus;
            priority: number;
            /**
             *
             */
            tags: /**
             * Tag
             * Tags are a way to grant various access, assign restrictions or other kinds of metadata to various to objects such as worlds, users and avatars.
             *
             * System tags starting with `system_` are granted automatically by the system, while admin tags with `admin_` are granted manually. More prefixes such as `language_ ` (to indicate that a player can speak the tagged language), and `author_tag_` (provided by a world author for search and sorting) exist as well.
             */
            Tag[];
            data: /**
             * InfoPushData
             *
             */
            InfoPushData;
            /**
             * Unknown usage, MD5
             */
            hash: string;
            createdAt: string; // date-time
            updatedAt: string; // date-time
            /**
             *
             */
            startDate?: string; // date-time
            endDate?: string; // date-time
        }
        /**
         * InfoPushData
         *
         */
        export interface InfoPushData {
            contentList?: /* DynamicContentRow */ DynamicContentRow;
            description?: string;
            imageUrl?: string;
            name?: string;
            onPressed?: /* InfoPushDataClickable */ InfoPushDataClickable;
            template?: string;
            /**
             * example:
             * 2021.3.4
             */
            version?: string;
            article?: /* InfoPushDataArticle */ InfoPushDataArticle;
        }
        /**
         * InfoPushDataArticle
         */
        export interface InfoPushDataArticle {
            content?: /* InfoPushDataArticleContent */ InfoPushDataArticleContent;
        }
        /**
         * InfoPushDataArticleContent
         */
        export interface InfoPushDataArticleContent {
            text?: string;
            imageUrl?: string;
            onPressed?: /* InfoPushDataClickable */ InfoPushDataClickable;
        }
        /**
         * InfoPushDataClickable
         */
        export interface InfoPushDataClickable {
            /**
             * example:
             * OpenURL
             */
            command: "OpenURL" | "OpenVRCPlusMenu" | "OpenSafetyMenu" | "CannedWorldSearch";
            /**
             * In case of OpenURL, this would contain the link.
             */
            parameters?: string[];
        }
        /**
         * Instance
         * * `hidden` field is only present if InstanceType is `hidden` aka "Friends+", and is instance creator.
         * * `friends` field is only present if InstanceType is `friends` aka "Friends", and is instance creator.
         * * `private` field is only present if InstanceType is `private` aka "Invite" or "Invite+", and is instance creator.
         */
        export interface Instance {
            /**
             * example:
             * true
             */
            active: boolean;
            /**
             * example:
             * true
             */
            canRequestInvite: boolean;
            /**
             * example:
             * 8
             */
            capacity: number;
            /**
             * Always returns "unknown".
             */
            clientNumber: string;
            full: boolean;
            id: /**
             * InstanceID
             * InstanceID can be "offline" on User profiles if you are not friends with that user and "private" if you are friends and user is in private instance.
             * example:
             * 12345~hidden(usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469)~region(eu)~nonce(27e8414a-59a0-4f3d-af1f-f27557eb49a2)
             */
            InstanceID;
            /**
             * example:
             * 12345~hidden(usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469)~region(eu)~nonce(27e8414a-59a0-4f3d-af1f-f27557eb49a2)
             */
            instanceId: string;
            location: /**
             * InstanceID
             * InstanceID can be "offline" on User profiles if you are not friends with that user and "private" if you are friends and user is in private instance.
             * example:
             * 12345~hidden(usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469)~region(eu)~nonce(27e8414a-59a0-4f3d-af1f-f27557eb49a2)
             */
            InstanceID;
            /**
             * example:
             * 6
             */
            memberCount: number;
            /**
             * example:
             * 12345
             */
            name: string;
            ownerId?: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            permanent: boolean;
            photonRegion: /**
             * Region
             * API/Photon region.
             * example:
             * eu
             */
            Region;
            platforms: /* InstancePlatforms */ InstancePlatforms;
            region: /**
             * Region
             * API/Photon region.
             * example:
             * eu
             */
            Region;
            /**
             * example:
             * 7eavhhng
             */
            secureName: string;
            /**
             * example:
             * 02u7yz8j
             */
            shortName?: string;
            world: /**
             * World
             *
             */
            World;
            /**
             * The tags array on Instances usually contain the language tags of the people in the instance.
             * example:
             * [
             *   "show_social_rank",
             *   "language_eng",
             *   "language_jpn"
             * ]
             */
            tags: /**
             * Tag
             * Tags are a way to grant various access, assign restrictions or other kinds of metadata to various to objects such as worlds, users and avatars.
             *
             * System tags starting with `system_` are granted automatically by the system, while admin tags with `admin_` are granted manually. More prefixes such as `language_ ` (to indicate that a player can speak the tagged language), and `author_tag_` (provided by a world author for search and sorting) exist as well.
             */
            Tag[];
            type: /**
             * InstanceType
             *
             * example:
             * hidden
             */
            InstanceType;
            worldId: /**
             * WorldID
             * WorldID be "offline" on User profiles if you are not friends with that user.
             * example:
             * wrld_ba913a96-fac4-4048-a062-9aa5db092812
             */
            WorldID;
            hidden?: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            friends?: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            private?: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
        }
        /**
         * InstanceID
         * InstanceID can be "offline" on User profiles if you are not friends with that user and "private" if you are friends and user is in private instance.
         * example:
         * 12345~hidden(usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469)~region(eu)~nonce(27e8414a-59a0-4f3d-af1f-f27557eb49a2)
         */
        export type InstanceID = string;
        /**
         * InstancePlatforms
         */
        export interface InstancePlatforms {
            /**
             * example:
             * 1
             */
            android: number;
            /**
             * example:
             * 5
             */
            standalonewindows: number;
        }
        /**
         * InstanceShortNameResponse
         */
        export interface InstanceShortNameResponse {
            /**
             * example:
             * 7eavhhng
             */
            secureName: string;
            /**
             * example:
             * 02u7yz8j
             */
            shortName?: string;
        }
        /**
         * InstanceType
         *
         * example:
         * hidden
         */
        export type InstanceType = "public" | "hidden" | "friends" | "private" | "group";
        /**
         * InviteMessage
         *
         */
        export interface InviteMessage {
            canBeUpdated: boolean;
            id: /**
             * InviteMessageID
             * example:
             * invm_24a1c14d-5e24-48e5-90e3-c3f712420ffa
             */
            InviteMessageID;
            message: string;
            messageType: /**
             * InviteMessageType
             *
             */
            InviteMessageType;
            /**
             * Changes to 60 when updated, although probably server-side configurable.
             */
            remainingCooldownMinutes: number;
            slot: number;
            updatedAt: string; // date-time
        }
        /**
         * InviteMessageID
         * example:
         * invm_24a1c14d-5e24-48e5-90e3-c3f712420ffa
         */
        export type InviteMessageID = string;
        /**
         * InviteMessageType
         *
         */
        export type InviteMessageType = "message" | "response" | "request" | "requestResponse";
        /**
         * InviteRequest
         */
        export interface InviteRequest {
            instanceId: /**
             * InstanceID
             * InstanceID can be "offline" on User profiles if you are not friends with that user and "private" if you are friends and user is in private instance.
             * example:
             * 12345~hidden(usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469)~region(eu)~nonce(27e8414a-59a0-4f3d-af1f-f27557eb49a2)
             */
            InstanceID;
            messageSlot?: number;
        }
        /**
         * InviteResponse
         */
        export interface InviteResponse {
            responseSlot: number;
        }
        /**
         * License
         */
        export interface License {
            /**
             * Either a AvatarID, LicenseGroupID, PermissionID or ProductID. This depends on the `forType` field.
             */
            forId: string;
            forType: /**
             * LicenseType
             * example:
             * permission
             */
            LicenseType;
            forName: string;
            forAction: /**
             * LicenseAction
             * example:
             * have
             */
            LicenseAction;
        }
        /**
         * LicenseAction
         * example:
         * have
         */
        export type LicenseAction = "wear" | "have";
        /**
         * LicenseGroup
         *
         * example:
         * {
         *   "id": "lgrp_608513da-b213-4e15-80af-bd88c27f0979",
         *   "name": "vrcplus",
         *   "description": "VRC+ benefits",
         *   "licenses": [
         *     {
         *       "forId": "prms_1d9549db-d30a-48f3-a6b8-6741ce5a4283",
         *       "forType": "permission",
         *       "forName": "permission-user-icons",
         *       "forAction": "have"
         *     },
         *     {
         *       "forId": "prms_76f33deb-dd5d-46b7-b79d-e1f8f0a9a1e0",
         *       "forType": "permission",
         *       "forName": "permission-supporter-tags",
         *       "forAction": "have"
         *     },
         *     {
         *       "forId": "prms_0d9549db-d30a-48f3-a6b8-6741ce5a4283",
         *       "forType": "permission",
         *       "forName": "permission-invite-photos",
         *       "forAction": "have"
         *     },
         *     {
         *       "forId": "prms_dc02c512-4c03-479c-8c6a-d9329c023baf",
         *       "forType": "permission",
         *       "forName": "permission-user-gallery",
         *       "forAction": "have"
         *     },
         *     {
         *       "forId": "prms_153ac0b7-c2dd-43f9-96e3-c61fd2e85509",
         *       "forType": "permission",
         *       "forName": "permission-profile-pic-override",
         *       "forAction": "have"
         *     }
         *   ]
         * }
         */
        export interface LicenseGroup {
            id: /**
             * LicenseGroupID
             * example:
             * lgrp_608513da-b213-4e15-80af-bd88c27f0979
             */
            LicenseGroupID;
            name: string;
            description: string;
            licenses: /* License */ License[];
        }
        /**
         * LicenseGroupID
         * example:
         * lgrp_608513da-b213-4e15-80af-bd88c27f0979
         */
        export type LicenseGroupID = string;
        /**
         * LicenseType
         * example:
         * permission
         */
        export type LicenseType = "avatar" | "licenseGroup" | "permission" | "product";
        /**
         * LimitedGroup
         */
        export interface LimitedGroup {
            id?: /**
             * GroupID
             * example:
             * grp_71a7ff59-112c-4e78-a990-c7cc650776e5
             */
            GroupID;
            name?: string;
            shortCode?: /**
             * GroupShortCode
             * example:
             * ABC123
             */
            GroupShortCode;
            discriminator?: /**
             * GroupDiscriminator
             * example:
             * 1234
             */
            GroupDiscriminator;
            description?: string;
            iconUrl?: string | null;
            bannerUrl?: string | null;
            ownerId?: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            rules?: string | null;
            iconId?: string | null;
            bannerId?: string | null;
            memberCount?: number;
            /**
             *
             */
            tags?: /**
             * Tag
             * Tags are a way to grant various access, assign restrictions or other kinds of metadata to various to objects such as worlds, users and avatars.
             *
             * System tags starting with `system_` are granted automatically by the system, while admin tags with `admin_` are granted manually. More prefixes such as `language_ ` (to indicate that a player can speak the tagged language), and `author_tag_` (provided by a world author for search and sorting) exist as well.
             */
            Tag[];
            createdAt?: string; // date-time
            membershipStatus?: /**
             * example:
             * member
             */
            GroupMemberStatus;
            isSearchable?: boolean;
            /**
             *
             */
            galleries?: /* GroupMember */ GroupGallery[];
        }
        /**
         * LimitedUnityPackage
         *
         */
        export interface LimitedUnityPackage {
            platform: /**
             * Platform
             * This can be `standalonewindows` or `android`, but can also pretty much be any random Unity verison such as `2019.2.4-801-Release` or `2019.2.2-772-Release` or even `unknownplatform`.
             * example:
             * standalonewindows
             */
            Platform;
            /**
             * example:
             * 2018.4.14f1
             */
            unityVersion: string;
        }
        /**
         * LimitedUser
         *
         */
        export interface LimitedUser {
            bio?: string;
            currentAvatarImageUrl: /**
             * CurrentAvatarImageUrl
             * When profilePicOverride is not empty, use it instead.
             * example:
             * https://api.vrchat.cloud/api/1/file/file_ae46d521-7281-4b38-b365-804b32a1d6a7/1/file
             */
            CurrentAvatarImageUrl;
            currentAvatarThumbnailImageUrl: /**
             * CurrentAvatarThumbnailImageUrl
             * When profilePicOverride is not empty, use it instead.
             * example:
             * https://api.vrchat.cloud/api/1/image/file_aae83ed9-d42d-4d72-9f4b-9f1e41ed17e1/1/256
             */
            CurrentAvatarThumbnailImageUrl;
            developerType: /**
             * DeveloperType
             * "none" User is a normal user
             * "trusted" Unknown
             * "internal" Is a VRChat Developer
             * "moderator" Is a VRChat Moderator
             *
             * Staff can hide their developerType at will.
             */
            DeveloperType;
            displayName: string;
            fallbackAvatar?: /**
             * AvatarID
             * example:
             * avtr_912d66a4-4714-43b8-8407-7de2cafbf55b
             */
            AvatarID;
            id: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            isFriend: boolean;
            last_platform: /**
             * Platform
             * This can be `standalonewindows` or `android`, but can also pretty much be any random Unity verison such as `2019.2.4-801-Release` or `2019.2.2-772-Release` or even `unknownplatform`.
             * example:
             * standalonewindows
             */
            Platform;
            profilePicOverride: string;
            status: /**
             * UserStatus
             * Defines the User's current status, for example "ask me", "join me" or "offline. This status is a combined indicator of their online activity and privacy preference.
             */
            UserStatus;
            statusDescription: string;
            /**
             * <- Always empty.
             */
            tags: /**
             * Tag
             * Tags are a way to grant various access, assign restrictions or other kinds of metadata to various to objects such as worlds, users and avatars.
             *
             * System tags starting with `system_` are granted automatically by the system, while admin tags with `admin_` are granted manually. More prefixes such as `language_ ` (to indicate that a player can speak the tagged language), and `author_tag_` (provided by a world author for search and sorting) exist as well.
             */
            Tag[];
            userIcon: string;
            /**
             * -| **DEPRECATED:** VRChat API no longer return usernames of other users. [See issue by Tupper for more information](https://github.com/pypy-vrc/VRCX/issues/429).
             */
            username?: string;
            location?: string;
            friendKey?: string;
        }
        /**
         * LimitedWorld
         *
         */
        export interface LimitedWorld {
            authorId: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            authorName: string;
            /**
             * example:
             * 8
             */
            capacity: number;
            /**
             * example:
             * 16
             */
            recommendedCapacity?: number;
            created_at: string; // date-time
            /**
             * example:
             * 12024
             */
            favorites: number;
            /**
             * example:
             * 5
             */
            heat: number;
            id: /**
             * WorldID
             * WorldID be "offline" on User profiles if you are not friends with that user.
             * example:
             * wrld_ba913a96-fac4-4048-a062-9aa5db092812
             */
            WorldID;
            imageUrl: string;
            /**
             * example:
             * none
             */
            labsPublicationDate: string;
            name: string;
            /**
             * example:
             * 47
             */
            occupants: number;
            organization: string;
            /**
             * example:
             * 8
             */
            popularity: number;
            /**
             * example:
             * none
             */
            publicationDate: string;
            releaseStatus: /**
             * ReleaseStatus
             * example:
             * public
             */
            ReleaseStatus;
            /**
             *
             */
            tags: /**
             * Tag
             * Tags are a way to grant various access, assign restrictions or other kinds of metadata to various to objects such as worlds, users and avatars.
             *
             * System tags starting with `system_` are granted automatically by the system, while admin tags with `admin_` are granted manually. More prefixes such as `language_ ` (to indicate that a player can speak the tagged language), and `author_tag_` (provided by a world author for search and sorting) exist as well.
             */
            Tag[];
            thumbnailImageUrl: string;
            /**
             *
             */
            unityPackages: [
                /**
                 * LimitedUnityPackage
                 *
                 */
                LimitedUnityPackage,
                .../**
                 * LimitedUnityPackage
                 *
                 */
                LimitedUnityPackage[]
            ];
            updated_at: string; // date-time
            udonProducts?: /**
             * UdonProductId
             * A unique ID of a Udon Product
             * example:
             * prod_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UdonProductId[];
        }
        /**
         * MIMEType
         * example:
         * image/jpeg
         */
        export type MIMEType = "image/jpeg" | "image/jpg" | "image/png" | "image/webp" | "image/gif" | "image/bmp" | "image/svg\uFF0Bxml" | "image/tiff" | "application/x-avatar" | "application/x-world" | "application/gzip" | "application/x-rsync-signature" | "application/x-rsync-delta" | "application/octet-stream";
        /**
         * ModerateUserRequest
         */
        export interface ModerateUserRequest {
            moderated: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            type: /**
             * PlayerModerationType
             * example:
             * unmute
             */
            PlayerModerationType;
        }
        /**
         * Notification
         *
         */
        export interface Notification {
            created_at: string; // date-time
            /**
             * **NOTICE:** This is not a JSON object when received from the REST API, but it is when received from the Websocket API. When received from the REST API, this is a json **encoded** object, meaning you have to json-de-encode to get the NotificationDetail object depending on the NotificationType.
             * example:
             * OneOf: {}, NotificationDetailInvite, NotificationDetailInviteResponse, NotificationDetailRequestInvite, NotificationDetailRequestInviteResponse, NotificationDetailVoteToKick
             */
            details: string;
            id: string;
            /**
             *
             * example:
             * This is a generated invite to VRChat Hub
             */
            message: string;
            /**
             * Not included in notification objects received from the Websocket API
             */
            seen?: boolean;
            /**
             * Not included in notification objects received from the REST API
             */
            receiverUserId?: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            senderUserId: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            /**
             * -| **DEPRECATED:** VRChat API no longer return usernames of other users. [See issue by Tupper for more information](https://github.com/pypy-vrc/VRCX/issues/429).
             */
            senderUsername?: string;
            type: /* NotificationType */ NotificationType;
        }
        /**
         * NotificationType
         */
        export type NotificationType = "friendRequest" | "invite" | "inviteResponse" | "requestInvite" | "requestInviteResponse" | "votetokick";
        /**
         * OrderOption
         * example:
         * descending
         */
        export type OrderOption = "ascending" | "descending";
        /**
         * PaginatedGroupAuditLogEntryList
         */
        export interface PaginatedGroupAuditLogEntryList {
            /**
             *
             */
            results?: /* GroupAuditLogEntry */ GroupAuditLogEntry[];
            /**
             * The total number of results that the query would return if there were no pagination.
             */
            totalCount?: number;
            /**
             * Whether there are more results after this page.
             */
            hasNext?: boolean;
        }
        /**
         * PastDisplayName
         */
        export interface PastDisplayName {
            displayName: string;
            updated_at: string; // date-time
        }
        /**
         * Permission
         *
         * example:
         * {
         *   "data": {
         *     "maxFavoriteGroups": {
         *       "avatar": 4
         *     },
         *     "maxFavoritesPerGroup": {
         *       "avatar": 25
         *     }
         *   },
         *   "id": "prms_804ba021-9f47-4e25-9847-1f42fdb2e6ff",
         *   "name": "permission-extra-favorites-avatar-groups",
         *   "ownerId": "usr_17f19d1e-fd48-493b-a8ad-807a3d8bdd1b"
         * }
         */
        export interface Permission {
            id: /**
             * PermissionID
             * example:
             * prms_804ba021-9f47-4e25-9847-1f42fdb2e6ff
             */
            PermissionID;
            /**
             * example:
             * permission-invite-photos
             */
            name: string;
            ownerId: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            data?: {
                [key: string]: any;
            };
        }
        /**
         * PermissionID
         * example:
         * prms_804ba021-9f47-4e25-9847-1f42fdb2e6ff
         */
        export type PermissionID = string;
        /**
         * Platform
         * This can be `standalonewindows` or `android`, but can also pretty much be any random Unity verison such as `2019.2.4-801-Release` or `2019.2.2-772-Release` or even `unknownplatform`.
         * example:
         * standalonewindows
         */
        export type Platform = string;
        /**
         * PlayerModeration
         */
        export interface PlayerModeration {
            created: string; // date-time
            id: /**
             * PlayerModerationID
             * example:
             * pmod_25551a8d-6f5d-430a-88d3-9c0ce08b5244
             */
            PlayerModerationID;
            sourceDisplayName: string;
            sourceUserId: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            targetDisplayName: string;
            targetUserId: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            type: /**
             * PlayerModerationType
             * example:
             * unmute
             */
            PlayerModerationType;
        }
        /**
         * PlayerModerationID
         * example:
         * pmod_25551a8d-6f5d-430a-88d3-9c0ce08b5244
         */
        export type PlayerModerationID = string;
        /**
         * PlayerModerationType
         * example:
         * unmute
         */
        export type PlayerModerationType = "mute" | "unmute" | "block" | "unblock" | "interactOn" | "interactOff";
        /**
         * Region
         * API/Photon region.
         * example:
         * eu
         */
        export type Region = "us" | "use" | "usw" | "eu" | "jp" | "unknown";
        /**
         * ReleaseStatus
         * example:
         * public
         */
        export type ReleaseStatus = "public" | "private" | "hidden" | "all";
        /**
         * RequestInviteRequest
         */
        export interface RequestInviteRequest {
            messageSlot?: number;
        }
        /**
         * RespondGroupJoinRequest
         */
        export interface RespondGroupJoinRequest {
            action?: string;
        }
        /**
         * Response
         */
        export interface Response {
            message?: string;
            status_code: number;
        }
        /**
         * SentNotification
         *
         */
        export interface SentNotification {
            created_at: string; // date-time
            /**
             * **NOTICE:** This is not a JSON object, this is a json **encoded** object, meaning you have to json-de-encode to get the NotificationDetail object depending on the NotificationType.
             * example:
             * OneOf: {}, NotificationDetailInvite, NotificationDetailInviteResponse, NotificationDetailRequestInvite, NotificationDetailRequestInviteResponse, NotificationDetailVoteToKick
             */
            details: string;
            id: string;
            /**
             *
             * example:
             * This is a generated invite to VRChat Hub
             */
            message: string;
            recieverUserId: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            senderUserId: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            /**
             * -| **DEPRECATED:** VRChat API no longer return usernames of other users. [See issue by Tupper for more information](https://github.com/pypy-vrc/VRCX/issues/429).
             */
            senderUsername?: string;
            type: /* NotificationType */ NotificationType;
        }
        /**
         * SortOption
         * example:
         * popularity
         */
        export type SortOption = "popularity" | "heat" | "trust" | "shuffle" | "random" | "favorites" | "reportScore" | "reportCount" | "publicationDate" | "labsPublicationDate" | "created" | "_created_at" | "updated" | "_updated_at" | "order" | "relevance" | "magic" | "name";
        /**
         * Subscription
         *
         * example:
         * {
         *   "id": "vrchatplus-yearly",
         *   "steamItemId": "5000",
         *   "amount": 9999,
         *   "description": "VRChat Plus (Yearly)",
         *   "period": "year",
         *   "tier": 5
         * }
         */
        export interface Subscription {
            id: string;
            steamItemId: string;
            amount: number;
            description: string;
            period: /* SubscriptionPeriod */ SubscriptionPeriod;
            tier: number;
        }
        /**
         * SubscriptionPeriod
         */
        export type SubscriptionPeriod = "hour" | "day" | "week" | "month" | "year";
        /**
         * Success
         */
        export interface Success {
            success?: /* Response */ Response;
        }
        /**
         * Tag
         * Tags are a way to grant various access, assign restrictions or other kinds of metadata to various to objects such as worlds, users and avatars.
         *
         * System tags starting with `system_` are granted automatically by the system, while admin tags with `admin_` are granted manually. More prefixes such as `language_ ` (to indicate that a player can speak the tagged language), and `author_tag_` (provided by a world author for search and sorting) exist as well.
         */
        export type Tag = string;
        /**
         * Transaction
         *
         */
        export interface Transaction {
            id: /**
             * TransactionID
             * example:
             * txn_e5c72948-e735-4880-8245-24b2a41198b0
             */
            TransactionID;
            status: /* TransactionStatus */ TransactionStatus;
            subscription: /**
             * Subscription
             *
             * example:
             * {
             *   "id": "vrchatplus-yearly",
             *   "steamItemId": "5000",
             *   "amount": 9999,
             *   "description": "VRChat Plus (Yearly)",
             *   "period": "year",
             *   "tier": 5
             * }
             */
            Subscription;
            sandbox: boolean;
            created_at: string; // date-time
            updated_at: string; // date-time
            steam?: /**
             * TransactionSteamInfo
             *
             */
            TransactionSteamInfo;
            agreement?: /**
             * TransactionAgreement
             *
             * example:
             * {
             *   "agreementId": "1234567890123456789",
             *   "itemId": 5000,
             *   "status": "Active",
             *   "period": "year",
             *   "frequency": 1,
             *   "billingType": "Steam",
             *   "startDate": "20220301",
             *   "endDate": "Infinite time value",
             *   "recurringAmt": 9999,
             *   "currency": "USD",
             *   "timeCreated": "20201201",
             *   "nextPayment": "20220301",
             *   "lastPayment": "NIL",
             *   "lastAmount": 0,
             *   "lastAmountVat": 0,
             *   "outstanding": 0,
             *   "failedAttempts": 0
             * }
             */
            TransactionAgreement;
            error: string;
        }
        /**
         * TransactionAgreement
         *
         * example:
         * {
         *   "agreementId": "1234567890123456789",
         *   "itemId": 5000,
         *   "status": "Active",
         *   "period": "year",
         *   "frequency": 1,
         *   "billingType": "Steam",
         *   "startDate": "20220301",
         *   "endDate": "Infinite time value",
         *   "recurringAmt": 9999,
         *   "currency": "USD",
         *   "timeCreated": "20201201",
         *   "nextPayment": "20220301",
         *   "lastPayment": "NIL",
         *   "lastAmount": 0,
         *   "lastAmountVat": 0,
         *   "outstanding": 0,
         *   "failedAttempts": 0
         * }
         */
        export interface TransactionAgreement {
            agreementId: string;
            itemId: number;
            /**
             * This is NOT TransactionStatus, but whatever Steam return.
             */
            status: string;
            period: string;
            frequency: number;
            billingType: string;
            startDate: string;
            endDate: string;
            recurringAmt: number;
            currency: string;
            timeCreated: string;
            nextPayment: string;
            lastPayment: string;
            lastAmount: number;
            lastAmountVat: number;
            outstanding: number;
            failedAttempts: number;
        }
        /**
         * TransactionID
         * example:
         * txn_e5c72948-e735-4880-8245-24b2a41198b0
         */
        export type TransactionID = string;
        /**
         * TransactionStatus
         */
        export type TransactionStatus = "active" | "failed" | "expired" | "chargeback";
        /**
         * TransactionSteamInfo
         *
         */
        export interface TransactionSteamInfo {
            walletInfo: /**
             * TransactionSteamWalletInfo
             *
             * example:
             * {
             *   "state": "",
             *   "country": "SE",
             *   "currency": "EUR",
             *   "status": "Trusted"
             * }
             */
            TransactionSteamWalletInfo;
            /**
             * Steam User ID
             */
            steamId: string;
            /**
             * Steam Order ID
             */
            orderId: string;
            /**
             * Empty
             */
            steamUrl: string;
            /**
             * Steam Transaction ID, NOT the same as VRChat TransactionID
             */
            transId: string;
        }
        /**
         * TransactionSteamWalletInfo
         *
         * example:
         * {
         *   "state": "",
         *   "country": "SE",
         *   "currency": "EUR",
         *   "status": "Trusted"
         * }
         */
        export interface TransactionSteamWalletInfo {
            state: string;
            /**
             * example:
             * SE
             */
            country: string;
            /**
             * example:
             * EUR
             */
            currency: string;
            /**
             * example:
             * Trusted
             */
            status: string;
        }
        /**
         * TwoFactorAuthCode
         */
        export interface TwoFactorAuthCode {
            code: string;
        }
        /**
         * TwoFactorEmailCode
         */
        export interface TwoFactorEmailCode {
            code: string;
        }
        /**
         * UdonProductId
         * A unique ID of a Udon Product
         * example:
         * prod_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
         */
        export type UdonProductId = string;
        /**
         * UnityPackage
         *
         * example:
         * {
         *   "assetUrl": "https://api.vrchat.cloud/api/1/file/file_cd0caa7b-69ba-4715-8dfe-7d667a9d2537/65/file",
         *   "assetUrlObject": {},
         *   "assetVersion": 4,
         *   "created_at": "2020-09-10T06:13:27.777Z",
         *   "id": "unp_52b12c39-4163-457d-a4a9-630e7aff1bff",
         *   "platform": "standalonewindows",
         *   "pluginUrl": "",
         *   "pluginUrlObject": {},
         *   "unitySortNumber": 20180414000,
         *   "unityVersion": "2018.4.14f1"
         * }
         */
        export interface UnityPackage {
            id: /**
             * UnityPackageID
             * example:
             * unp_52b12c39-4163-457d-a4a9-630e7aff1bff
             */
            UnityPackageID;
            assetUrl?: string | null;
            assetUrlObject?: {
                [key: string]: any;
            };
            assetVersion: number;
            created_at?: string; // date-time
            platform: /**
             * Platform
             * This can be `standalonewindows` or `android`, but can also pretty much be any random Unity verison such as `2019.2.4-801-Release` or `2019.2.2-772-Release` or even `unknownplatform`.
             * example:
             * standalonewindows
             */
            Platform;
            pluginUrl?: string;
            pluginUrlObject?: {
                [key: string]: any;
            };
            unitySortNumber?: number; // int64
            /**
             * example:
             * 2018.4.12f1
             */
            unityVersion: string;
            impostorUrl?: string | null;
            scanStatus?: string;
        }
        /**
         * UnityPackageID
         * example:
         * unp_52b12c39-4163-457d-a4a9-630e7aff1bff
         */
        export type UnityPackageID = string;
        /**
         * UpdateAvatarRequest
         */
        export interface UpdateAvatarRequest {
            assetUrl?: string;
            id?: /**
             * AvatarID
             * example:
             * avtr_912d66a4-4714-43b8-8407-7de2cafbf55b
             */
            AvatarID;
            name?: string;
            description?: string;
            /**
             *
             */
            tags?: /**
             * Tag
             * Tags are a way to grant various access, assign restrictions or other kinds of metadata to various to objects such as worlds, users and avatars.
             *
             * System tags starting with `system_` are granted automatically by the system, while admin tags with `admin_` are granted manually. More prefixes such as `language_ ` (to indicate that a player can speak the tagged language), and `author_tag_` (provided by a world author for search and sorting) exist as well.
             */
            Tag[];
            imageUrl?: string;
            releaseStatus?: /**
             * ReleaseStatus
             * example:
             * public
             */
            ReleaseStatus;
            version?: number;
            unityPackageUrl?: string;
        }
        /**
         * UpdateFavoriteGroupRequest
         */
        export interface UpdateFavoriteGroupRequest {
            displayName?: string;
            visibility?: /**
             * FavoriteGroupVisibility
             * example:
             * private
             */
            FavoriteGroupVisibility;
            /**
             * Tags on FavoriteGroups are believed to do nothing.
             */
            tags?: /**
             * Tag
             * Tags are a way to grant various access, assign restrictions or other kinds of metadata to various to objects such as worlds, users and avatars.
             *
             * System tags starting with `system_` are granted automatically by the system, while admin tags with `admin_` are granted manually. More prefixes such as `language_ ` (to indicate that a player can speak the tagged language), and `author_tag_` (provided by a world author for search and sorting) exist as well.
             */
            Tag[];
        }
        /**
         * UpdateGroupGalleryRequest
         */
        export interface UpdateGroupGalleryRequest {
            /**
             * Name of the gallery.
             * example:
             * Example Gallery
             */
            name?: string;
            /**
             * Description of the gallery.
             * example:
             * Example Description
             */
            description?: string;
            /**
             * Whether the gallery is members only.
             * example:
             * false
             */
            membersOnly?: boolean;
            /**
             *
             */
            roleIdsToView?: /**
             * GroupRoleID
             * example:
             * grol_459d3911-f672-44bc-b84d-e54ffe7960fe
             */
            GroupRoleID[] | null;
            /**
             *
             */
            roleIdsToSubmit?: /**
             * GroupRoleID
             * example:
             * grol_459d3911-f672-44bc-b84d-e54ffe7960fe
             */
            GroupRoleID[] | null;
            /**
             *
             */
            roleIdsToAutoApprove?: /**
             * GroupRoleID
             * example:
             * grol_459d3911-f672-44bc-b84d-e54ffe7960fe
             */
            GroupRoleID[] | null;
            /**
             *
             */
            roleIdsToManage?: /**
             * GroupRoleID
             * example:
             * grol_459d3911-f672-44bc-b84d-e54ffe7960fe
             */
            GroupRoleID[] | null;
        }
        /**
         * UpdateGroupMemberRequest
         */
        export interface UpdateGroupMemberRequest {
            visibility?: /**
             * GroupUserVisibility
             * example:
             * visible
             */
            GroupUserVisibility;
            isSubscribedToAnnouncements?: boolean;
            managerNotes?: string;
        }
        /**
         * UpdateGroupRequest
         */
        export interface UpdateGroupRequest {
            name?: string;
            shortCode?: string;
            description?: string;
            joinState?: /* GroupJoinState */ GroupJoinState;
            iconId?: string | null;
            bannerId?: string | null;
            /**
             * 3 letter language code
             */
            languages?: [
                string?,
                string?,
                string?
            ];
            links?: [
                string?,
                string?,
                string?
            ];
            rules?: string;
            /**
             *
             */
            tags?: /**
             * Tag
             * Tags are a way to grant various access, assign restrictions or other kinds of metadata to various to objects such as worlds, users and avatars.
             *
             * System tags starting with `system_` are granted automatically by the system, while admin tags with `admin_` are granted manually. More prefixes such as `language_ ` (to indicate that a player can speak the tagged language), and `author_tag_` (provided by a world author for search and sorting) exist as well.
             */
            Tag[];
        }
        /**
         * UpdateGroupRoleRequest
         */
        export interface UpdateGroupRoleRequest {
            name?: string;
            description?: string;
            isSelfAssignable?: boolean;
            permissions?: string[];
            order?: number;
        }
        /**
         * UpdateInviteMessageRequest
         */
        export interface UpdateInviteMessageRequest {
            message: string;
        }
        /**
         * UpdateUserRequest
         */
        export interface UpdateUserRequest {
            email?: string;
            birthday?: string; // date
            acceptedTOSVersion?: number;
            /**
             *
             */
            tags?: /**
             * Tag
             * Tags are a way to grant various access, assign restrictions or other kinds of metadata to various to objects such as worlds, users and avatars.
             *
             * System tags starting with `system_` are granted automatically by the system, while admin tags with `admin_` are granted manually. More prefixes such as `language_ ` (to indicate that a player can speak the tagged language), and `author_tag_` (provided by a world author for search and sorting) exist as well.
             */
            Tag[];
            status?: /**
             * UserStatus
             * Defines the User's current status, for example "ask me", "join me" or "offline. This status is a combined indicator of their online activity and privacy preference.
             */
            UserStatus;
            statusDescription?: string;
            bio?: string;
            bioLinks?: string[];
            /**
             * MUST be a valid VRChat /file/ url.
             * example:
             * https://api.vrchat.cloud/api/1/file/file_76dc2964-0ce8-41df-b2e7-8edf994fee31/1
             */
            userIcon?: string;
        }
        /**
         * UpdateWorldRequest
         */
        export interface UpdateWorldRequest {
            assetUrl?: string;
            assetVersion?: string;
            authorId?: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            authorName?: string;
            /**
             * example:
             * 8
             */
            capacity?: number;
            description?: string;
            imageUrl?: string;
            name?: string;
            platform?: /**
             * Platform
             * This can be `standalonewindows` or `android`, but can also pretty much be any random Unity verison such as `2019.2.4-801-Release` or `2019.2.2-772-Release` or even `unknownplatform`.
             * example:
             * standalonewindows
             */
            Platform;
            releaseStatus?: /**
             * ReleaseStatus
             * example:
             * public
             */
            ReleaseStatus;
            /**
             *
             */
            tags?: /**
             * Tag
             * Tags are a way to grant various access, assign restrictions or other kinds of metadata to various to objects such as worlds, users and avatars.
             *
             * System tags starting with `system_` are granted automatically by the system, while admin tags with `admin_` are granted manually. More prefixes such as `language_ ` (to indicate that a player can speak the tagged language), and `author_tag_` (provided by a world author for search and sorting) exist as well.
             */
            Tag[];
            unityPackageUrl?: string;
            /**
             * example:
             * 2018.4.20f1
             */
            unityVersion?: string;
        }
        /**
         * User
         */
        export interface User {
            allowAvatarCopying: boolean;
            bio: string;
            bioLinks: string[];
            currentAvatarImageUrl: /**
             * CurrentAvatarImageUrl
             * When profilePicOverride is not empty, use it instead.
             * example:
             * https://api.vrchat.cloud/api/1/file/file_ae46d521-7281-4b38-b365-804b32a1d6a7/1/file
             */
            CurrentAvatarImageUrl;
            currentAvatarThumbnailImageUrl: /**
             * CurrentAvatarThumbnailImageUrl
             * When profilePicOverride is not empty, use it instead.
             * example:
             * https://api.vrchat.cloud/api/1/image/file_aae83ed9-d42d-4d72-9f4b-9f1e41ed17e1/1/256
             */
            CurrentAvatarThumbnailImageUrl;
            date_joined: string; // date
            developerType: /**
             * DeveloperType
             * "none" User is a normal user
             * "trusted" Unknown
             * "internal" Is a VRChat Developer
             * "moderator" Is a VRChat Moderator
             *
             * Staff can hide their developerType at will.
             */
            DeveloperType;
            /**
             * A users visual display name. This is what shows up in-game, and can different from their `username`. Changing display name is restricted to a cooldown period.
             */
            displayName: string;
            friendKey: string;
            friendRequestStatus?: string;
            id: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            instanceId?: /**
             * InstanceID
             * InstanceID can be "offline" on User profiles if you are not friends with that user and "private" if you are friends and user is in private instance.
             * example:
             * 12345~hidden(usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469)~region(eu)~nonce(27e8414a-59a0-4f3d-af1f-f27557eb49a2)
             */
            InstanceID;
            /**
             * Either their `friendKey`, or empty string if you are not friends. Unknown usage.
             */
            isFriend: boolean;
            /**
             * Either a date-time or empty string.
             */
            last_activity: string;
            /**
             * Either a date-time or empty string.
             */
            last_login: string;
            last_platform: /**
             * Platform
             * This can be `standalonewindows` or `android`, but can also pretty much be any random Unity verison such as `2019.2.4-801-Release` or `2019.2.2-772-Release` or even `unknownplatform`.
             * example:
             * standalonewindows
             */
            Platform;
            location?: /**
             * WorldID
             * WorldID be "offline" on User profiles if you are not friends with that user.
             * example:
             * wrld_ba913a96-fac4-4048-a062-9aa5db092812
             */
            WorldID;
            note?: string;
            profilePicOverride: string;
            state: /**
             * UserState
             * * "online" User is online in VRChat
             * * "active" User is online, but not in VRChat
             * * "offline" User is offline
             *
             * Always offline when returned through `getCurrentUser` (/auth/user).
             */
            UserState;
            status: /**
             * UserStatus
             * Defines the User's current status, for example "ask me", "join me" or "offline. This status is a combined indicator of their online activity and privacy preference.
             */
            UserStatus;
            statusDescription: string;
            /**
             *
             */
            tags: /**
             * Tag
             * Tags are a way to grant various access, assign restrictions or other kinds of metadata to various to objects such as worlds, users and avatars.
             *
             * System tags starting with `system_` are granted automatically by the system, while admin tags with `admin_` are granted manually. More prefixes such as `language_ ` (to indicate that a player can speak the tagged language), and `author_tag_` (provided by a world author for search and sorting) exist as well.
             */
            Tag[];
            travelingToInstance?: string;
            travelingToLocation?: string;
            travelingToWorld?: string;
            userIcon: string;
            /**
             * -| A users unique name, used during login. This is different from `displayName` which is what shows up in-game. A users `username` can never be changed.'
             * **DEPRECATED:** VRChat API no longer return usernames of other users. [See issue by Tupper for more information](https://github.com/pypy-vrc/VRCX/issues/429).
             */
            username?: string;
            worldId?: /**
             * WorldID
             * WorldID be "offline" on User profiles if you are not friends with that user.
             * example:
             * wrld_ba913a96-fac4-4048-a062-9aa5db092812
             */
            WorldID;
        }
        /**
         * UserExists
         * Status object representing if a queried user by username or userId exists or not. This model is primarily used by the `/auth/exists` endpoint, which in turn is used during registration. Please see the documentation on that endpoint for more information on usage.
         */
        export interface UserExists {
            /**
             * Status if a user exist with that username or userId.
             */
            userExists: boolean;
        }
        /**
         * UserID
         * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
         * example:
         * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
         */
        export type UserID = string;
        /**
         * UserState
         * * "online" User is online in VRChat
         * * "active" User is online, but not in VRChat
         * * "offline" User is offline
         *
         * Always offline when returned through `getCurrentUser` (/auth/user).
         */
        export type UserState = "offline" | "active" | "online";
        /**
         * UserStatus
         * Defines the User's current status, for example "ask me", "join me" or "offline. This status is a combined indicator of their online activity and privacy preference.
         */
        export type UserStatus = "active" | "join me" | "ask me" | "busy" | "offline";
        /**
         * UserSubscription
         *
         * example:
         * {
         *   "id": "vrchatplus-yearly",
         *   "transactionId": "txn_63231aa6-8b7a-49ff-a106-d5678f8318b1",
         *   "store": "Steam",
         *   "steamItemId": "5000",
         *   "amount": 9999,
         *   "description": "VRChat Plus (Yearly)",
         *   "period": "year",
         *   "tier": 5,
         *   "active": true,
         *   "status": "active",
         *   "expires": "2022-03-04T00:00:00.000Z",
         *   "created_at": "2020-12-04T13:09:54.344Z",
         *   "updated_at": "2020-12-10T19:53:45.362Z",
         *   "licenseGroups": [
         *     "lgrp_608513da-b213-4e15-80af-bd88c27f0979"
         *   ],
         *   "isGift": false
         * }
         */
        export interface UserSubscription {
            id: string;
            transactionId: /**
             * TransactionID
             * example:
             * txn_e5c72948-e735-4880-8245-24b2a41198b0
             */
            TransactionID;
            /**
             * Which "Store" it came from. Right now only Stores are "Steam" and "Admin".
             */
            store: string;
            steamItemId?: string;
            amount: number;
            description: string;
            period: /* SubscriptionPeriod */ SubscriptionPeriod;
            tier: number;
            active: boolean;
            status: /* TransactionStatus */ TransactionStatus;
            expires: string; // date-time
            created_at: string; // date-time
            updated_at: string; // date-time
            licenseGroups: /**
             * LicenseGroupID
             * example:
             * lgrp_608513da-b213-4e15-80af-bd88c27f0979
             */
            LicenseGroupID[];
            isGift: boolean;
        }
        /**
         * Verify2FAEmailCodeResult
         */
        export interface Verify2FAEmailCodeResult {
            verified: boolean;
        }
        /**
         * Verify2FAResult
         */
        export interface Verify2FAResult {
            verified: boolean;
        }
        /**
         * VerifyAuthTokenResult
         */
        export interface VerifyAuthTokenResult {
            ok: boolean;
            token: string;
        }
        /**
         * World
         *
         */
        export interface World {
            authorId: /**
             * UserID
             * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
             * example:
             * usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UserID;
            authorName: string;
            /**
             * example:
             * 8
             */
            capacity: number;
            /**
             * example:
             * 4
             */
            recommendedCapacity: number;
            created_at: string; // date-time
            description: string;
            /**
             * example:
             * 12024
             */
            favorites?: number;
            featured: boolean;
            /**
             * example:
             * 5
             */
            heat: number;
            id: /**
             * WorldID
             * WorldID be "offline" on User profiles if you are not friends with that user.
             * example:
             * wrld_ba913a96-fac4-4048-a062-9aa5db092812
             */
            WorldID;
            imageUrl: string;
            /**
             * Will always be an empty list when unauthenticated.
             */
            instances?: [
                any,
                any
            ][];
            /**
             * example:
             * none
             */
            labsPublicationDate: string;
            name: string;
            namespace: string;
            /**
             * Will always be `0` when unauthenticated.
             * example:
             * 47
             */
            occupants?: number;
            organization: string;
            /**
             * example:
             * 8
             */
            popularity: number;
            previewYoutubeId?: string | null;
            /**
             * Will always be `0` when unauthenticated.
             * example:
             * 1
             */
            privateOccupants?: number;
            /**
             * Will always be `0` when unauthenticated.
             * example:
             * 46
             */
            publicOccupants?: number;
            /**
             * example:
             * none
             */
            publicationDate: string;
            releaseStatus: /**
             * ReleaseStatus
             * example:
             * public
             */
            ReleaseStatus;
            /**
             *
             */
            tags: /**
             * Tag
             * Tags are a way to grant various access, assign restrictions or other kinds of metadata to various to objects such as worlds, users and avatars.
             *
             * System tags starting with `system_` are granted automatically by the system, while admin tags with `admin_` are granted manually. More prefixes such as `language_ ` (to indicate that a player can speak the tagged language), and `author_tag_` (provided by a world author for search and sorting) exist as well.
             */
            Tag[];
            thumbnailImageUrl: string;
            /**
             * Empty if unauthenticated.
             */
            unityPackages?: /**
             * UnityPackage
             *
             * example:
             * {
             *   "assetUrl": "https://api.vrchat.cloud/api/1/file/file_cd0caa7b-69ba-4715-8dfe-7d667a9d2537/65/file",
             *   "assetUrlObject": {},
             *   "assetVersion": 4,
             *   "created_at": "2020-09-10T06:13:27.777Z",
             *   "id": "unp_52b12c39-4163-457d-a4a9-630e7aff1bff",
             *   "platform": "standalonewindows",
             *   "pluginUrl": "",
             *   "pluginUrlObject": {},
             *   "unitySortNumber": 20180414000,
             *   "unityVersion": "2018.4.14f1"
             * }
             */
            UnityPackage[];
            updated_at: string; // date-time
            /**
             * example:
             * 68
             */
            version: number;
            /**
             * example:
             * 9988675
             */
            visits: number;
            udonProducts?: /**
             * UdonProductId
             * A unique ID of a Udon Product
             * example:
             * prod_c1644b5b-3ca4-45b4-97c6-a2a0de70d469
             */
            UdonProductId[];
        }
        /**
         * WorldID
         * WorldID be "offline" on User profiles if you are not friends with that user.
         * example:
         * wrld_ba913a96-fac4-4048-a062-9aa5db092812
         */
        export type WorldID = string;
        /**
         * WorldMetadata
         */
        export interface WorldMetadata {
            id: /**
             * WorldID
             * WorldID be "offline" on User profiles if you are not friends with that user.
             * example:
             * wrld_ba913a96-fac4-4048-a062-9aa5db092812
             */
            WorldID;
            metadata: {
                [key: string]: any;
            };
        }
        /**
         * WorldPublishStatus
         */
        export interface WorldPublishStatus {
            canPubilsh: boolean;
        }
    }
}
declare namespace Paths {
    namespace AcceptFriendRequest {
        namespace Responses {
            export type $200 = Components.Responses.FriendSuccess;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.AcceptFriendRequestError;
        }
    }
    namespace AddFavorite {
        export type RequestBody = /* AddFavoriteRequest */ Components.Schemas.AddFavoriteRequest;
        namespace Responses {
            export type $200 = Components.Responses.FavoriteResponse;
            export type $400 = Components.Responses.FavoriteAddAlreadyFavoritedError;
            export type $403 = Components.Responses.FavoriteAddNotFriendsError;
        }
    }
    namespace AddGroupGalleryImage {
        export type RequestBody = /* AddGroupGalleryImageRequest */ Components.Schemas.AddGroupGalleryImageRequest;
        namespace Responses {
            export type $200 = Components.Responses.GroupGalleryImageResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace AddGroupMemberRole {
        namespace Responses {
            export type $200 = Components.Responses.GroupRoleIDListResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace AdminTransactions$TransactionId {
        namespace Parameters {
            export type $0 = Components.Parameters.TransactionId;
        }
    }
    namespace AuthUserFriends$UserId {
        namespace Parameters {
            export type $0 = Components.Parameters.UserId;
        }
    }
    namespace AuthUserNotifications$NotificationIdAccept {
        namespace Parameters {
            export type $0 = Components.Parameters.NotificationId;
        }
    }
    namespace AuthUserNotifications$NotificationIdHide {
        namespace Parameters {
            export type $0 = Components.Parameters.NotificationId;
        }
    }
    namespace AuthUserNotifications$NotificationIdSee {
        namespace Parameters {
            export type $0 = Components.Parameters.NotificationId;
        }
    }
    namespace AuthUserPlayermoderations$PlayerModerationId {
        namespace Parameters {
            export type PlayerModerationId = string;
        }
        export interface PathParameters {
            playerModerationId: Parameters.PlayerModerationId;
        }
    }
    namespace Avatars$AvatarId {
        namespace Parameters {
            export type $0 = Components.Parameters.AvatarId;
        }
    }
    namespace Avatars$AvatarIdSelect {
        namespace Parameters {
            export type $0 = Components.Parameters.AvatarId;
        }
    }
    namespace Avatars$AvatarIdSelectFallback {
        namespace Parameters {
            export type $0 = Components.Parameters.AvatarId;
        }
    }
    namespace BanGroupMember {
        export type RequestBody = /* BanGroupMemberRequest */ Components.Schemas.BanGroupMemberRequest;
        namespace Responses {
            export type $200 = Components.Responses.GroupMemberResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace CancelGroupRequest {
        namespace Responses {
            export interface $200 {
            }
            export interface $400 {
            }
            export type $403 = Components.Responses.GroupNotMemberError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace CheckUserExists {
        namespace Parameters {
            export type DisplayName = string;
            export type Email = string;
            export type ExcludeUserId = string;
            export type UserId = string;
        }
        export interface QueryParameters {
            email?: Parameters.Email;
            displayName?: Parameters.DisplayName;
            userId?: Parameters.UserId;
            excludeUserId?: Parameters.ExcludeUserId;
        }
        namespace Responses {
            export type $200 = Components.Responses.UserExistsResponse;
            export type $400 = Components.Responses.MissingParameterError;
        }
    }
    namespace ClearAllPlayerModerations {
        namespace Responses {
            export type $200 = Components.Responses.PlayerModerationClearAllSuccess;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace ClearFavoriteGroup {
        namespace Responses {
            export type $200 = Components.Responses.FavoriteGroupClearedSuccess;
        }
    }
    namespace ClearNotifications {
        namespace Responses {
            export type $200 = Components.Responses.ClearNotificationsSuccess;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace CreateAvatar {
        export type RequestBody = /* CreateAvatarRequest */ Components.Schemas.CreateAvatarRequest;
        namespace Responses {
            export type $200 = Components.Responses.AvatarResponse;
            export type $401 = Components.Responses.FeaturedSetNotAdminError;
        }
    }
    namespace CreateFile {
        export type RequestBody = /* CreateFileRequest */ Components.Schemas.CreateFileRequest;
        namespace Responses {
            export type $200 = Components.Responses.FileResponse;
        }
    }
    namespace CreateFileVersion {
        export type RequestBody = /* CreateFileVersionRequest */ Components.Schemas.CreateFileVersionRequest;
        namespace Responses {
            export type $200 = Components.Responses.FileResponse;
        }
    }
    namespace CreateGroup {
        export type RequestBody = /* CreateGroupRequest */ Components.Schemas.CreateGroupRequest;
        namespace Responses {
            export type $200 = Components.Responses.GroupResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace CreateGroupAnnouncement {
        export type RequestBody = /* CreateGroupAnnouncementRequest */ Components.Schemas.CreateGroupAnnouncementRequest;
        namespace Responses {
            export type $200 = Components.Responses.GroupAnnouncementResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace CreateGroupGallery {
        export type RequestBody = /* CreateGroupGalleryRequest */ Components.Schemas.CreateGroupGalleryRequest;
        namespace Responses {
            export type $200 = Components.Responses.GroupGalleryResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace CreateGroupInvite {
        export type RequestBody = /* CreateGroupInviteRequest */ Components.Schemas.CreateGroupInviteRequest;
        namespace Responses {
            export interface $200 {
            }
            export interface $400 {
            }
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace CreateGroupRole {
        export type RequestBody = /* CreateGroupRequest */ Components.Schemas.CreateGroupRoleRequest;
        namespace Responses {
            export type $200 = Components.Responses.GroupRoleResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace CreateWorld {
        export type RequestBody = /* CreateWorldRequest */ Components.Schemas.CreateWorldRequest;
        namespace Responses {
            export type $200 = Components.Responses.WorldResponse;
            export type $400 = Components.Responses.WorldCreateNotAllowedYetError;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace DeleteAvatar {
        namespace Responses {
            export type $200 = Components.Responses.AvatarResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.AvatarNotFoundError;
        }
    }
    namespace DeleteFile {
        namespace Responses {
            export type $200 = Components.Responses.FileDeletedSuccess;
            export type $404 = Components.Responses.FileDeletedError;
        }
    }
    namespace DeleteFileVersion {
        namespace Responses {
            export type $200 = Components.Responses.FileResponse;
            export type $400 = Components.Responses.FileVersionDeleteInitialError;
            export type $500 = Components.Responses.FileVersionDeleteMiddleError;
        }
    }
    namespace DeleteFriendRequest {
        namespace Responses {
            export type $200 = Components.Responses.DeleteFriendSuccess;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.DeleteFriendRequestError;
        }
    }
    namespace DeleteGroup {
        namespace Responses {
            export type $200 = Components.Responses.DeleteGroupSuccess;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace DeleteGroupAnnouncement {
        namespace Responses {
            export type $200 = Components.Responses.DeleteGroupAnnouncementSuccess;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace DeleteGroupGallery {
        namespace Responses {
            export type $200 = Components.Responses.DeleteGroupGallerySuccess;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace DeleteGroupGalleryImage {
        namespace Responses {
            export type $200 = Components.Responses.DeleteGroupGalleryImageSuccess;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $403 = Components.Responses.GroupGalleryImageDeleteForbiddenError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace DeleteGroupInvite {
        namespace Responses {
            export interface $200 {
            }
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace DeleteGroupRole {
        namespace Responses {
            export type $200 = Components.Responses.GroupRoleListResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotMemberError;
        }
    }
    namespace DeleteNotification {
        namespace Responses {
            export type $200 = Components.Responses.NotificationResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace DeletePlayerModeration {
        namespace Responses {
            export type $200 = Components.Responses.PlayerModerationRemovedSuccess;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $403 = Components.Responses.PlayerModerationDeleteOthersError;
        }
    }
    namespace DeleteUser {
        namespace Responses {
            export type $200 = Components.Responses.DeleteUserResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace DeleteWorld {
        namespace Responses {
            export interface $200 {
            }
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.WorldNotFoundError;
        }
    }
    namespace DownloadFileVersion {
        namespace Responses {
            export type $200 = Components.Responses.RawFileResponse;
        }
    }
    namespace FavoriteGroup$FavoriteGroupType$FavoriteGroupName$UserId {
        namespace Parameters {
            export type $0 = Components.Parameters.FavoriteGroupType;
            export type $1 = Components.Parameters.FavoriteGroupName;
            export type $2 = Components.Parameters.UserId;
        }
    }
    namespace Favorites$FavoriteId {
        namespace Parameters {
            export type $0 = Components.Parameters.FavoriteId;
        }
    }
    namespace File$FileId {
        namespace Parameters {
            export type $0 = /**
             * example:
             * file_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.FileId;
        }
    }
    namespace File$FileId$VersionId {
        namespace Parameters {
            export type $0 = /**
             * example:
             * file_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.FileId;
            export type $1 = /**
             * example:
             * 1
             */
            Components.Parameters.VersionId;
        }
    }
    namespace File$FileId$VersionId$FileTypeFinish {
        namespace Parameters {
            export type $0 = /**
             * example:
             * file_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.FileId;
            export type $1 = /**
             * example:
             * 1
             */
            Components.Parameters.VersionId;
            export type $2 = /**
             * example:
             * file
             */
            Components.Parameters.FileType;
        }
    }
    namespace File$FileId$VersionId$FileTypeStart {
        namespace Parameters {
            export type $0 = /**
             * example:
             * file_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.FileId;
            export type $1 = /**
             * example:
             * 1
             */
            Components.Parameters.VersionId;
            export type $2 = /**
             * example:
             * file
             */
            Components.Parameters.FileType;
        }
    }
    namespace File$FileId$VersionId$FileTypeStatus {
        namespace Parameters {
            export type $0 = /**
             * example:
             * file_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.FileId;
            export type $1 = /**
             * example:
             * 1
             */
            Components.Parameters.VersionId;
            export type $2 = /**
             * example:
             * file
             */
            Components.Parameters.FileType;
        }
    }
    namespace FinishFileDataUpload {
        export type RequestBody = /**
         * FinishFileDataUploadRequest
         *
         */
        Components.Schemas.FinishFileDataUploadRequest;
        namespace Responses {
            export type $200 = Components.Responses.FileResponse;
        }
    }
    namespace Friend {
        namespace Responses {
            export type $200 = Components.Responses.NotificationResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.UserDoesntExistError;
        }
    }
    namespace GetActiveWorlds {
        namespace Parameters {
            export type Featured = boolean;
            export type MaxUnityVersion = string;
            export type MinUnityVersion = string;
            export type N = number;
            export type Notag = string;
            export type Offset = number;
            export type Order = /**
             * OrderOption
             * example:
             * descending
             */
            Components.Schemas.OrderOption;
            export type Platform = string;
            export type ReleaseStatus = /**
             * ReleaseStatus
             * example:
             * public
             */
            Components.Schemas.ReleaseStatus;
            export type Search = string;
            export type Sort = /**
             * SortOption
             * example:
             * popularity
             */
            Components.Schemas.SortOption;
            export type Tag = string;
        }
        export interface QueryParameters {
            featured?: Parameters.Featured;
            sort?: Parameters.Sort;
            n?: Parameters.N;
            order?: Parameters.Order;
            offset?: Parameters.Offset;
            search?: Parameters.Search;
            tag?: Parameters.Tag;
            notag?: Parameters.Notag;
            releaseStatus?: Parameters.ReleaseStatus;
            maxUnityVersion?: Parameters.MaxUnityVersion;
            minUnityVersion?: Parameters.MinUnityVersion;
            platform?: Parameters.Platform;
        }
        namespace Responses {
            export type $200 = Components.Responses.LimitedWorldListResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace GetAssignedPermissions {
        namespace Responses {
            export type $200 = Components.Responses.PermissionListResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace GetAvatar {
        namespace Responses {
            export type $200 = Components.Responses.AvatarResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.AvatarNotFoundError;
        }
    }
    namespace GetCSS {
        namespace Parameters {
            export type Branch = string;
            export type Variant = "public" | "internal";
        }
        export interface QueryParameters {
            variant?: Parameters.Variant;
            branch?: Parameters.Branch;
        }
        namespace Responses {
            export type $200 = string;
            export type $400 = Components.Responses.DownloadSourceCodeAccessError;
        }
    }
    namespace GetConfig {
        namespace Responses {
            export type $200 = Components.Responses.APIConfigResponse;
        }
    }
    namespace GetCurrentOnlineUsers {
        namespace Responses {
            export type $200 = /**
             * Number of online users
             * example:
             * 12345
             */
            Components.Responses.CurrentOnlineUsersResponse;
        }
    }
    namespace GetCurrentSubscriptions {
        namespace Responses {
            export type $200 = Components.Responses.UserSubscriptionListResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace GetCurrentUser {
        namespace Responses {
            export type $200 = Components.Responses.CurrentUserLoginResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace GetFavorite {
        namespace Responses {
            export type $200 = Components.Responses.FavoriteResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.FavoriteNotFoundError;
        }
    }
    namespace GetFavoriteGroup {
        namespace Responses {
            export type $200 = Components.Responses.FavoriteGroupResponse;
        }
    }
    namespace GetFavoriteGroups {
        namespace Parameters {
            export type N = number;
            export type Offset = number;
            export type OwnerId = string;
        }
        export interface QueryParameters {
            n?: Parameters.N;
            offset?: Parameters.Offset;
            ownerId?: Parameters.OwnerId;
        }
        namespace Responses {
            export type $200 = Components.Responses.FavoriteGroupListResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace GetFavoritedAvatars {
        namespace Parameters {
            export type Featured = boolean;
            export type MaxUnityVersion = string;
            export type MinUnityVersion = string;
            export type N = number;
            export type Notag = string;
            export type Offset = number;
            export type Order = /**
             * OrderOption
             * example:
             * descending
             */
            Components.Schemas.OrderOption;
            export type Platform = string;
            export type ReleaseStatus = /**
             * ReleaseStatus
             * example:
             * public
             */
            Components.Schemas.ReleaseStatus;
            export type Search = string;
            export type Sort = /**
             * SortOption
             * example:
             * popularity
             */
            Components.Schemas.SortOption;
            export type Tag = string;
            export type UserId = string;
        }
        export interface QueryParameters {
            featured?: Parameters.Featured;
            sort?: Parameters.Sort;
            n?: Parameters.N;
            order?: Parameters.Order;
            offset?: Parameters.Offset;
            search?: Parameters.Search;
            tag?: Parameters.Tag;
            notag?: Parameters.Notag;
            releaseStatus?: Parameters.ReleaseStatus;
            maxUnityVersion?: Parameters.MaxUnityVersion;
            minUnityVersion?: Parameters.MinUnityVersion;
            platform?: Parameters.Platform;
            userId?: Parameters.UserId;
        }
        namespace Responses {
            export type $200 = Components.Responses.AvatarListResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $403 = Components.Responses.AvatarSeeOtherUserFavoritesError;
        }
    }
    namespace GetFavoritedWorlds {
        namespace Parameters {
            export type Featured = boolean;
            export type MaxUnityVersion = string;
            export type MinUnityVersion = string;
            export type N = number;
            export type Notag = string;
            export type Offset = number;
            export type Order = /**
             * OrderOption
             * example:
             * descending
             */
            Components.Schemas.OrderOption;
            export type Platform = string;
            export type ReleaseStatus = /**
             * ReleaseStatus
             * example:
             * public
             */
            Components.Schemas.ReleaseStatus;
            export type Search = string;
            export type Sort = /**
             * SortOption
             * example:
             * popularity
             */
            Components.Schemas.SortOption;
            export type Tag = string;
            export type UserId = string;
        }
        export interface QueryParameters {
            featured?: Parameters.Featured;
            sort?: Parameters.Sort;
            n?: Parameters.N;
            order?: Parameters.Order;
            offset?: Parameters.Offset;
            search?: Parameters.Search;
            tag?: Parameters.Tag;
            notag?: Parameters.Notag;
            releaseStatus?: Parameters.ReleaseStatus;
            maxUnityVersion?: Parameters.MaxUnityVersion;
            minUnityVersion?: Parameters.MinUnityVersion;
            platform?: Parameters.Platform;
            userId?: Parameters.UserId;
        }
        namespace Responses {
            export type $200 = Components.Responses.LimitedWorldListResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $403 = Components.Responses.WorldSeeOtherUserFavoritesError;
        }
    }
    namespace GetFavorites {
        namespace Parameters {
            export type N = number;
            export type Offset = number;
            export type Tag = string;
            export type Type = string;
        }
        export interface QueryParameters {
            n?: Parameters.N;
            offset?: Parameters.Offset;
            type?: Parameters.Type;
            tag?: Parameters.Tag;
        }
        namespace Responses {
            export type $200 = Components.Responses.FavoriteListResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace GetFile {
        namespace Responses {
            export type $200 = Components.Responses.FileResponse;
            export type $404 = Components.Responses.FileNotFoundError;
        }
    }
    namespace GetFileDataUploadStatus {
        namespace Responses {
            export type $200 = Components.Responses.FileVersionUploadStatusResponse;
        }
    }
    namespace GetFiles {
        namespace Parameters {
            export type N = number;
            export type Offset = number;
            export type Tag = string;
            export type UserId = string;
        }
        export interface QueryParameters {
            tag?: Parameters.Tag;
            userId?: Parameters.UserId;
            n?: Parameters.N;
            offset?: Parameters.Offset;
        }
        namespace Responses {
            export type $200 = Components.Responses.FileListResponse;
        }
    }
    namespace GetFriendStatus {
        namespace Responses {
            export type $200 = Components.Responses.FriendStatusResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace GetFriends {
        namespace Parameters {
            export type N = number;
            export type Offline = boolean;
            export type Offset = number;
        }
        export interface QueryParameters {
            offset?: Parameters.Offset;
            n?: Parameters.N;
            offline?: Parameters.Offline;
        }
        namespace Responses {
            export type $200 = Components.Responses.LimitedUserListResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace GetGroup {
        namespace Parameters {
            export type IncludeRoles = boolean;
        }
        export interface QueryParameters {
            includeRoles?: Parameters.IncludeRoles;
        }
        namespace Responses {
            export type $200 = Components.Responses.GroupResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace GetGroupAnnouncements {
        namespace Responses {
            export type $200 = Components.Responses.GroupAnnouncementResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace GetGroupAuditLogs {
        namespace Parameters {
            export type EndDate = string; // date-time
            export type N = number;
            export type Offset = number;
            export type StartDate = string; // date-time
        }
        export interface QueryParameters {
            n?: Parameters.N;
            offset?: Parameters.Offset;
            startDate?: Parameters.StartDate /* date-time */;
            endDate?: Parameters.EndDate /* date-time */;
        }
        namespace Responses {
            export type $200 = Components.Responses.GroupAuditLogListResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace GetGroupBans {
        namespace Parameters {
            export type N = number;
            export type Offset = number;
        }
        export interface QueryParameters {
            n?: Parameters.N;
            offset?: Parameters.Offset;
        }
        namespace Responses {
            export type $200 = Components.Responses.GroupMemberListResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace GetGroupGalleryImages {
        namespace Parameters {
            export type Approved = boolean;
            export type N = number;
            export type Offset = number;
        }
        export interface QueryParameters {
            n?: Parameters.N;
            offset?: Parameters.Offset;
            approved?: Parameters.Approved;
        }
        namespace Responses {
            export type $200 = Components.Responses.GroupGalleryImageListResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace GetGroupInstances {
        namespace Responses {
            export type $200 = Components.Responses.GroupInstancesResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace GetGroupInvites {
        namespace Responses {
            export type $200 = Components.Responses.GroupMemberListResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $403 = Components.Responses.GroupNotMemberError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace GetGroupMember {
        namespace Responses {
            export type $200 = Components.Responses.GroupLimitedMemberResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace GetGroupMembers {
        namespace Parameters {
            export type N = number;
            export type Offset = number;
        }
        export interface QueryParameters {
            n?: Parameters.N;
            offset?: Parameters.Offset;
        }
        namespace Responses {
            export type $200 = Components.Responses.GroupMemberListResponse;
            export type $400 = Components.Responses.UsersInvalidSearchError;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace GetGroupPermissions {
        namespace Responses {
            export type $200 = Components.Responses.GroupPermissionListResponse;
            export type $400 = Components.Responses.UsersInvalidSearchError;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace GetGroupRequests {
        namespace Responses {
            export type $200 = Components.Responses.GroupMemberListResponse;
            export type $403 = Components.Responses.GroupNotMemberError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace GetGroupRoles {
        namespace Responses {
            export type $200 = Components.Responses.GroupRoleListResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace GetHealth {
        namespace Responses {
            export type $200 = Components.Responses.APIHealthResponse;
        }
    }
    namespace GetInfoPush {
        namespace Parameters {
            export type Include = string;
            export type Require = string;
        }
        export interface QueryParameters {
            require?: Parameters.Require;
            include?: Parameters.Include;
        }
        namespace Responses {
            export type $200 = Components.Responses.InfoPushListResponse;
        }
    }
    namespace GetInstance {
        namespace Responses {
            export type $200 = Components.Responses.InstanceResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace GetInstanceByShortName {
        namespace Responses {
            export type $200 = Components.Responses.InstanceResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.InstanceNotFoundError;
        }
    }
    namespace GetInviteMessage {
        namespace Responses {
            export type $200 = Components.Responses.InviteMessageResponse;
            export type $400 = Components.Responses.InviteMessageGetNegativeSlotError;
            export type $401 = Components.Responses.NotAuthorizedActionError;
            export type $404 = Components.Responses.InviteMessageGetTooHighSlotError;
        }
    }
    namespace GetInviteMessages {
        namespace Responses {
            export type $200 = Components.Responses.InviteMessageListResponse;
            export type $400 = Components.Responses.InviteMessageInvalidSlotNumberError;
            export type $401 = Components.Responses.NotAuthorizedActionError;
        }
    }
    namespace GetJavaScript {
        namespace Parameters {
            export type Branch = string;
            export type Variant = "public" | "internal";
        }
        export interface QueryParameters {
            variant?: Parameters.Variant;
            branch?: Parameters.Branch;
        }
        namespace Responses {
            export type $400 = Components.Responses.DownloadSourceCodeAccessError;
        }
    }
    namespace GetLicenseGroup {
        namespace Responses {
            export type $200 = Components.Responses.LicenseGroupResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace GetNotifications {
        namespace Parameters {
            /**
             * example:
             * five_minutes_ago
             */
            export type After = string;
            export type Hidden = boolean;
            export type N = number;
            export type Offset = number;
            export type Sent = boolean;
            /**
             * example:
             * all
             */
            export type Type = string;
        }
        export interface QueryParameters {
            type?: /**
             * example:
             * all
             */
            Parameters.Type;
            sent?: Parameters.Sent;
            hidden?: Parameters.Hidden;
            after?: /**
             * example:
             * five_minutes_ago
             */
            Parameters.After;
            n?: Parameters.N;
            offset?: Parameters.Offset;
        }
        namespace Responses {
            export type $200 = Components.Responses.NotificationListResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace GetOwnAvatar {
        namespace Responses {
            export type $200 = Components.Responses.AvatarResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $403 = Components.Responses.AvatarSeeOtherUserCurrentAvatarError;
        }
    }
    namespace GetPermission {
        namespace Responses {
            export type $200 = Components.Responses.PermissionResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace GetPlayerModeration {
        namespace Responses {
            export type $200 = Components.Responses.PlayerModerationResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.PlayerModerationNotFoundError;
        }
    }
    namespace GetPlayerModerations {
        namespace Parameters {
            export type TargetUserId = string;
            export type Type = string;
        }
        export interface QueryParameters {
            type?: Parameters.Type;
            targetUserId?: Parameters.TargetUserId;
        }
        namespace Responses {
            export type $200 = Components.Responses.PlayerModerationListResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace GetRecentWorlds {
        namespace Parameters {
            export type Featured = boolean;
            export type MaxUnityVersion = string;
            export type MinUnityVersion = string;
            export type N = number;
            export type Notag = string;
            export type Offset = number;
            export type Order = /**
             * OrderOption
             * example:
             * descending
             */
            Components.Schemas.OrderOption;
            export type Platform = string;
            export type ReleaseStatus = /**
             * ReleaseStatus
             * example:
             * public
             */
            Components.Schemas.ReleaseStatus;
            export type Search = string;
            export type Sort = /**
             * SortOption
             * example:
             * popularity
             */
            Components.Schemas.SortOption;
            export type Tag = string;
            export type UserId = string;
        }
        export interface QueryParameters {
            featured?: Parameters.Featured;
            sort?: Parameters.Sort;
            n?: Parameters.N;
            order?: Parameters.Order;
            offset?: Parameters.Offset;
            search?: Parameters.Search;
            tag?: Parameters.Tag;
            notag?: Parameters.Notag;
            releaseStatus?: Parameters.ReleaseStatus;
            maxUnityVersion?: Parameters.MaxUnityVersion;
            minUnityVersion?: Parameters.MinUnityVersion;
            platform?: Parameters.Platform;
            userId?: Parameters.UserId;
        }
        namespace Responses {
            export type $200 = Components.Responses.LimitedWorldListResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $403 = Components.Responses.WorldSeeOtherUserRecentsError;
        }
    }
    namespace GetShortName {
        namespace Responses {
            export type $200 = Components.Responses.InstanceShortNameResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace GetSteamTransaction {
        namespace Responses {
            export type $200 = Components.Responses.TransactionResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace GetSteamTransactions {
        namespace Responses {
            export type $200 = Components.Responses.TransactionListResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace GetSubscriptions {
        namespace Responses {
            export type $200 = Components.Responses.SubscriptionListResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace GetSystemTime {
        namespace Responses {
            export type $200 = /**
             * Does not return millisecond precision. Always returns time in UTC.
             * example:
             * 2021-08-20T12:38:42.000Z
             */
            Components.Responses.SystemTimeResponse /* date-time */;
        }
    }
    namespace GetUser {
        namespace Responses {
            export type $200 = Components.Responses.UserResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace GetUserByName {
        namespace Responses {
            export type $200 = Components.Responses.UserResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace GetUserGroupRequests {
        namespace Responses {
            export type $200 = Components.Responses.GroupListResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace GetUserGroups {
        namespace Responses {
            export type $200 = Components.Responses.GroupListResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace GetWorld {
        namespace Responses {
            export type $200 = Components.Responses.WorldResponse;
            export type $404 = Components.Responses.WorldNotFoundError;
        }
    }
    namespace GetWorldInstance {
        namespace Responses {
            export type $200 = Components.Responses.InstanceResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace GetWorldMetadata {
        namespace Responses {
            export type $200 = Components.Responses.WorldMetadataResponse;
            export type $404 = Components.Responses.WorldNotFoundError;
        }
    }
    namespace GetWorldPublishStatus {
        namespace Responses {
            export type $200 = Components.Responses.WorldPublishStatusResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.WorldNotFoundError;
        }
    }
    namespace Groups$GroupId {
        namespace Parameters {
            export type $0 = /**
             * example:
             * grp_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupId;
        }
    }
    namespace Groups$GroupIdAnnouncement {
        namespace Parameters {
            export type $0 = /**
             * example:
             * grp_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupId;
        }
    }
    namespace Groups$GroupIdAuditLogs {
        namespace Parameters {
            export type $0 = /**
             * example:
             * grp_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupId;
        }
    }
    namespace Groups$GroupIdBans {
        namespace Parameters {
            export type $0 = /**
             * example:
             * grp_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupId;
        }
    }
    namespace Groups$GroupIdBans$UserId {
        namespace Parameters {
            export type $0 = /**
             * example:
             * grp_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupId;
            export type $1 = Components.Parameters.UserId;
        }
    }
    namespace Groups$GroupIdGalleries {
        namespace Parameters {
            export type $0 = /**
             * example:
             * grp_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupId;
        }
    }
    namespace Groups$GroupIdGalleries$GroupGalleryId {
        namespace Parameters {
            export type $0 = /**
             * example:
             * grp_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupId;
            export type $1 = /**
             * example:
             * ggal_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupGalleryId;
        }
    }
    namespace Groups$GroupIdGalleries$GroupGalleryIdImages {
        namespace Parameters {
            export type $0 = /**
             * example:
             * grp_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupId;
            export type $1 = /**
             * example:
             * ggal_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupGalleryId;
        }
    }
    namespace Groups$GroupIdGalleries$GroupGalleryIdImages$GroupGalleryImageId {
        namespace Parameters {
            export type $0 = /**
             * example:
             * grp_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupId;
            export type $1 = /**
             * example:
             * ggal_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupGalleryId;
            export type $2 = /**
             * example:
             * ggim_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupGalleryImageId;
        }
    }
    namespace Groups$GroupIdInstances {
        namespace Parameters {
            export type $0 = /**
             * example:
             * grp_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupId;
        }
    }
    namespace Groups$GroupIdInvites {
        namespace Parameters {
            export type $0 = /**
             * example:
             * grp_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupId;
        }
    }
    namespace Groups$GroupIdInvites$UserId {
        namespace Parameters {
            export type $0 = /**
             * example:
             * grp_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupId;
            export type $1 = Components.Parameters.UserId;
        }
    }
    namespace Groups$GroupIdJoin {
        namespace Parameters {
            export type $0 = /**
             * example:
             * grp_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupId;
        }
    }
    namespace Groups$GroupIdLeave {
        namespace Parameters {
            export type $0 = /**
             * example:
             * grp_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupId;
        }
    }
    namespace Groups$GroupIdMembers {
        namespace Parameters {
            export type $0 = /**
             * example:
             * grp_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupId;
        }
    }
    namespace Groups$GroupIdMembers$UserId {
        namespace Parameters {
            export type $0 = /**
             * example:
             * grp_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupId;
            export type $1 = Components.Parameters.UserId;
        }
    }
    namespace Groups$GroupIdMembers$UserIdRoles$GroupRoleId {
        namespace Parameters {
            export type $0 = /**
             * example:
             * grp_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupId;
            export type $1 = Components.Parameters.UserId;
            export type $2 = /**
             * example:
             * grol_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupRoleId;
        }
    }
    namespace Groups$GroupIdPermissions {
        namespace Parameters {
            export type $0 = /**
             * example:
             * grp_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupId;
        }
    }
    namespace Groups$GroupIdRequests {
        namespace Parameters {
            export type $0 = /**
             * example:
             * grp_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupId;
        }
    }
    namespace Groups$GroupIdRequests$UserId {
        namespace Parameters {
            export type $0 = /**
             * example:
             * grp_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupId;
            export type $1 = Components.Parameters.UserId;
        }
    }
    namespace Groups$GroupIdRoles {
        namespace Parameters {
            export type $0 = /**
             * example:
             * grp_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupId;
        }
    }
    namespace Groups$GroupIdRoles$GroupRoleId {
        namespace Parameters {
            export type $0 = /**
             * example:
             * grp_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupId;
            export type $1 = /**
             * example:
             * grol_00000000-0000-0000-0000-000000000000
             */
            Components.Parameters.GroupRoleId;
        }
    }
    namespace Instances$WorldId$InstanceId {
        namespace Parameters {
            export type $0 = Components.Parameters.WorldId;
            export type $1 = Components.Parameters.InstanceId;
        }
    }
    namespace Instances$WorldId$InstanceIdInvite {
        namespace Parameters {
            export type $0 = Components.Parameters.WorldId;
            export type $1 = Components.Parameters.InstanceId;
        }
    }
    namespace Instances$WorldId$InstanceIdShortName {
        namespace Parameters {
            export type $0 = Components.Parameters.WorldId;
            export type $1 = Components.Parameters.InstanceId;
        }
    }
    namespace InstancesS$ShortName {
        namespace Parameters {
            export type ShortName = string;
        }
        export interface PathParameters {
            shortName: Parameters.ShortName;
        }
    }
    namespace Invite$NotificationIdResponse {
        namespace Parameters {
            export type $0 = Components.Parameters.NotificationId;
        }
    }
    namespace Invite$UserId {
        namespace Parameters {
            export type $0 = Components.Parameters.UserId;
        }
    }
    namespace InviteMyselfTo {
        namespace Responses {
            export type $200 = Components.Responses.SendNotificationResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.InstanceNotFoundError;
        }
    }
    namespace InviteMyselfTo$WorldId$InstanceId {
        namespace Parameters {
            export type $0 = Components.Parameters.WorldId;
            export type $1 = Components.Parameters.InstanceId;
        }
    }
    namespace InviteUser {
        export type RequestBody = /* InviteRequest */ Components.Schemas.InviteRequest;
        namespace Responses {
            export type $200 = Components.Responses.SendNotificationResponse;
            export type $403 = Components.Responses.InviteMustBeFriendsError;
        }
    }
    namespace JoinGroup {
        namespace Responses {
            export type $200 = Components.Responses.GroupMemberResponse;
            export type $400 = Components.Responses.GroupAlreadyMemberError;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace KickGroupMember {
        namespace Responses {
            export interface $200 {
            }
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $403 = Components.Responses.GroupNotMemberError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace LeaveGroup {
        namespace Responses {
            export interface $200 {
            }
            export type $403 = Components.Responses.GroupNotMemberError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace LicenseGroups$LicenseGroupId {
        namespace Parameters {
            export type $0 = Components.Parameters.LicenseGroupId;
        }
    }
    namespace Logout {
        namespace Responses {
            export type $200 = Components.Responses.LogoutSuccess;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace MarkNotificationAsRead {
        namespace Responses {
            export type $200 = Components.Responses.NotificationResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace Message$UserId$MessageType {
        namespace Parameters {
            export type $0 = Components.Parameters.UserId;
            export type $1 = Components.Parameters.MessageType;
        }
    }
    namespace Message$UserId$MessageType$Slot {
        namespace Parameters {
            export type $0 = Components.Parameters.UserId;
            export type $1 = Components.Parameters.MessageType;
            export type $2 = Components.Parameters.Slot;
        }
    }
    namespace ModerateUser {
        export type RequestBody = /* ModerateUserRequest */ Components.Schemas.ModerateUserRequest;
        namespace Responses {
            export type $200 = Components.Responses.PlayerModerationResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace Permissions$PermissionId {
        namespace Parameters {
            export type $0 = Components.Parameters.PermissionId;
        }
    }
    namespace PublishWorld {
        namespace Responses {
            export interface $200 {
            }
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.WorldNotFoundError;
        }
    }
    namespace RemoveFavorite {
        namespace Responses {
            export type $200 = Components.Responses.FavoriteRemovedSuccess;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.FavoriteNotFoundError;
        }
    }
    namespace RemoveGroupMemberRole {
        namespace Responses {
            export type $200 = Components.Responses.GroupRoleIDListResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace RequestInvite {
        export type RequestBody = /* RequestInviteRequest */ Components.Schemas.RequestInviteRequest;
        namespace Responses {
            export type $200 = Components.Responses.NotificationResponse;
            export type $403 = Components.Responses.InviteMustBeFriendsError;
        }
    }
    namespace RequestInvite$UserId {
        namespace Parameters {
            export type $0 = Components.Parameters.UserId;
        }
    }
    namespace ResetInviteMessage {
        namespace Responses {
            export type $200 = Components.Responses.InviteMessageListResponse;
            export type $400 = Components.Responses.InviteMessageInvalidSlotNumberError;
            export type $401 = Components.Responses.NotAuthorizedActionError;
            export type $404 = Components.Responses.InviteMessageNoEntryForSlotError;
            export type $429 = Components.Responses.InviteMessageUpdateRateLimitError;
        }
    }
    namespace RespondGroupJoinRequest {
        export type RequestBody = /* RespondGroupJoinRequest */ Components.Schemas.RespondGroupJoinRequest;
        namespace Responses {
            export interface $200 {
            }
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace RespondInvite {
        export type RequestBody = /* InviteResponse */ Components.Schemas.InviteResponse;
        namespace Responses {
            export type $200 = Components.Responses.NotificationResponse;
            export type $400 = Components.Responses.InviteResponse400Error;
        }
    }
    namespace SearchAvatars {
        namespace Parameters {
            export type Featured = boolean;
            export type MaxUnityVersion = string;
            export type MinUnityVersion = string;
            export type N = number;
            export type Notag = string;
            export type Offset = number;
            export type Order = /**
             * OrderOption
             * example:
             * descending
             */
            Components.Schemas.OrderOption;
            export type Platform = string;
            export type ReleaseStatus = /**
             * ReleaseStatus
             * example:
             * public
             */
            Components.Schemas.ReleaseStatus;
            export type Sort = /**
             * SortOption
             * example:
             * popularity
             */
            Components.Schemas.SortOption;
            export type Tag = string;
            export type User = "me";
            export type UserId = string;
        }
        export interface QueryParameters {
            featured?: Parameters.Featured;
            sort?: Parameters.Sort;
            user?: Parameters.User;
            userId?: Parameters.UserId;
            n?: Parameters.N;
            order?: Parameters.Order;
            offset?: Parameters.Offset;
            tag?: Parameters.Tag;
            notag?: Parameters.Notag;
            releaseStatus?: Parameters.ReleaseStatus;
            maxUnityVersion?: Parameters.MaxUnityVersion;
            minUnityVersion?: Parameters.MinUnityVersion;
            platform?: Parameters.Platform;
        }
        namespace Responses {
            export type $200 = Components.Responses.AvatarListResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace SearchGroups {
        namespace Parameters {
            export type N = number;
            export type Offset = number;
            export type Query = string;
        }
        export interface QueryParameters {
            query?: Parameters.Query;
            offset?: Parameters.Offset;
            n?: Parameters.N;
        }
        namespace Responses {
            export type $200 = Components.Responses.LimitedGroupListResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace SearchUsers {
        namespace Parameters {
            export type DeveloperType = string;
            export type N = number;
            export type Offset = number;
            export type Search = string;
        }
        export interface QueryParameters {
            search?: Parameters.Search;
            developerType?: Parameters.DeveloperType;
            n?: Parameters.N;
            offset?: Parameters.Offset;
        }
        namespace Responses {
            export type $200 = Components.Responses.LimitedUserListResponse;
            export type $400 = Components.Responses.UsersInvalidSearchError;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace SearchWorlds {
        namespace Parameters {
            export type Featured = boolean;
            export type MaxUnityVersion = string;
            export type MinUnityVersion = string;
            export type N = number;
            export type Notag = string;
            export type Offset = number;
            export type Order = /**
             * OrderOption
             * example:
             * descending
             */
            Components.Schemas.OrderOption;
            export type Platform = string;
            export type ReleaseStatus = /**
             * ReleaseStatus
             * example:
             * public
             */
            Components.Schemas.ReleaseStatus;
            export type Search = string;
            export type Sort = /**
             * SortOption
             * example:
             * popularity
             */
            Components.Schemas.SortOption;
            export type Tag = string;
            export type User = "me";
            export type UserId = string;
        }
        export interface QueryParameters {
            featured?: Parameters.Featured;
            sort?: Parameters.Sort;
            user?: Parameters.User;
            userId?: Parameters.UserId;
            n?: Parameters.N;
            order?: Parameters.Order;
            offset?: Parameters.Offset;
            search?: Parameters.Search;
            tag?: Parameters.Tag;
            notag?: Parameters.Notag;
            releaseStatus?: Parameters.ReleaseStatus;
            maxUnityVersion?: Parameters.MaxUnityVersion;
            minUnityVersion?: Parameters.MinUnityVersion;
            platform?: Parameters.Platform;
        }
        namespace Responses {
            export type $200 = Components.Responses.LimitedWorldListResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace SelectAvatar {
        namespace Responses {
            export type $200 = Components.Responses.CurrentUserResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.AvatarNotFoundError;
        }
    }
    namespace SelectFallbackAvatar {
        namespace Responses {
            export type $200 = Components.Responses.CurrentUserResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $403 = Components.Responses.AvatarNotTaggedAsFallbackError;
            export type $404 = Components.Responses.AvatarNotFoundError;
        }
    }
    namespace SendSelfInvite {
        namespace Responses {
            export type $200 = Components.Responses.InstanceSelfInviteSuccess;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace StartFileDataUpload {
        namespace Parameters {
            /**
             * example:
             * 1
             */
            export type PartNumber = number;
        }
        export interface QueryParameters {
            partNumber?: /**
             * example:
             * 1
             */
            Parameters.PartNumber;
        }
        namespace Responses {
            export type $200 = Components.Responses.FileUploadURLResponse;
            export type $400 = Components.Responses.FileUploadAlreadyFinishedError;
        }
    }
    namespace SteamTransactions$TransactionId {
        namespace Parameters {
            export type $0 = Components.Parameters.TransactionId;
        }
    }
    namespace UnbanGroupMember {
        namespace Responses {
            export type $200 = Components.Responses.GroupMemberResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace Unfriend {
        namespace Responses {
            export type $200 = Components.Responses.UnfriendSuccess;
            export type $400 = Components.Responses.NotFriendsError;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace UnmoderateUser {
        export type RequestBody = /* ModerateUserRequest */ Components.Schemas.ModerateUserRequest;
        namespace Responses {
            export type $200 = Components.Responses.PlayerModerationUnmoderatedSuccess;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace UnpublishWorld {
        namespace Responses {
            export interface $200 {
            }
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.WorldNotFoundError;
        }
    }
    namespace UpdateAvatar {
        export type RequestBody = /* UpdateAvatarRequest */ Components.Schemas.UpdateAvatarRequest;
        namespace Responses {
            export type $200 = Components.Responses.AvatarResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.AvatarNotFoundError;
        }
    }
    namespace UpdateFavoriteGroup {
        export type RequestBody = /* UpdateFavoriteGroupRequest */ Components.Schemas.UpdateFavoriteGroupRequest;
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace UpdateGroup {
        export type RequestBody = /* UpdateGroupRequest */ Components.Schemas.UpdateGroupRequest;
        namespace Responses {
            export type $200 = Components.Responses.GroupResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace UpdateGroupGallery {
        export type RequestBody = /* UpdateGroupGalleryRequest */ Components.Schemas.UpdateGroupGalleryRequest;
        namespace Responses {
            export type $200 = Components.Responses.GroupGalleryResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace UpdateGroupMember {
        export type RequestBody = /* UpdateGroupMemberRequest */ Components.Schemas.UpdateGroupMemberRequest;
        namespace Responses {
            export type $200 = Components.Responses.GroupLimitedMemberResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.GroupNotFoundError;
        }
    }
    namespace UpdateGroupRole {
        export type RequestBody = /* UpdateGroupRoleRequest */ Components.Schemas.UpdateGroupRoleRequest;
        namespace Responses {
            export type $200 = Components.Responses.GroupRoleListResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace UpdateInviteMessage {
        export type RequestBody = /* UpdateInviteMessageRequest */ Components.Schemas.UpdateInviteMessageRequest;
        namespace Responses {
            export type $200 = Components.Responses.InviteMessageListResponse;
            export type $400 = Components.Responses.InviteMessageInvalidSlotNumberError;
            export type $401 = Components.Responses.NotAuthorizedActionError;
            export type $429 = Components.Responses.InviteMessageUpdateRateLimitError;
        }
    }
    namespace UpdateUser {
        export type RequestBody = /* UpdateUserRequest */ Components.Schemas.UpdateUserRequest;
        namespace Responses {
            export type $200 = Components.Responses.CurrentUserResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace UpdateWorld {
        export type RequestBody = /* UpdateWorldRequest */ Components.Schemas.UpdateWorldRequest;
        namespace Responses {
            export type $200 = Components.Responses.WorldResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
            export type $404 = Components.Responses.WorldNotFoundError;
        }
    }
    namespace User$UserIdFriendRequest {
        namespace Parameters {
            export type $0 = Components.Parameters.UserId;
        }
    }
    namespace User$UserIdFriendStatus {
        namespace Parameters {
            export type $0 = Components.Parameters.UserId;
        }
    }
    namespace Users$UserId {
        namespace Parameters {
            export type $0 = Components.Parameters.UserId;
        }
    }
    namespace Users$UserIdAvatar {
        namespace Parameters {
            export type $0 = Components.Parameters.UserId;
        }
    }
    namespace Users$UserIdDelete {
        namespace Parameters {
            export type $0 = Components.Parameters.UserId;
        }
    }
    namespace Users$UserIdGroups {
        namespace Parameters {
            export type $0 = Components.Parameters.UserId;
        }
    }
    namespace Users$UserIdGroupsRequested {
        namespace Parameters {
            export type $0 = Components.Parameters.UserId;
        }
    }
    namespace Users$UsernameName {
        namespace Parameters {
            export type Username = string;
        }
        export interface PathParameters {
            username: Parameters.Username;
        }
    }
    namespace Verify2FA {
        export type RequestBody = /* TwoFactorAuthCode */ Components.Schemas.TwoFactorAuthCode;
        namespace Responses {
            export type $200 = Components.Responses.Verify2FAResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace Verify2FAEmailCode {
        export type RequestBody = /* TwoFactorEmailCode */ Components.Schemas.TwoFactorEmailCode;
        namespace Responses {
            export type $200 = Components.Responses.Verify2FAEmailCodeResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace VerifyAuthToken {
        namespace Responses {
            export type $200 = Components.Responses.VerifyAuthTokenResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace VerifyRecoveryCode {
        export type RequestBody = /* TwoFactorAuthCode */ Components.Schemas.TwoFactorAuthCode;
        namespace Responses {
            export type $200 = Components.Responses.Verify2FAResponse;
            export type $401 = Components.Responses.MissingCredentialsError;
        }
    }
    namespace Worlds$WorldId {
        namespace Parameters {
            export type $0 = Components.Parameters.WorldId;
        }
    }
    namespace Worlds$WorldId$InstanceId {
        namespace Parameters {
            export type $0 = Components.Parameters.WorldId;
            export type $1 = Components.Parameters.InstanceId;
        }
    }
    namespace Worlds$WorldIdMetadata {
        namespace Parameters {
            export type $0 = Components.Parameters.WorldId;
        }
    }
    namespace Worlds$WorldIdPublish {
        namespace Parameters {
            export type $0 = Components.Parameters.WorldId;
        }
    }
}

export interface OperationMethods {
  /**
   * checkUserExists - Check User Exists
   * 
   * Checks if a user by a given `username`, `displayName` or `email` exist. This is used during registration to check if a username has already been taken, during change of displayName to check if a displayName is available, and during change of email to check if the email is already used. In the later two cases the `excludeUserId` is used to exclude oneself, otherwise the result would always be true.
   * 
   * It is **REQUIRED** to include **AT LEAST** `username`, `displayName` **or** `email` query parameter. Although they can be combined - in addition with `excludeUserId` (generally to exclude yourself) - to further fine-tune the search.
   */
  'checkUserExists'(
    parameters?: Parameters<Paths.CheckUserExists.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CheckUserExists.Responses.$200>
  /**
   * getCurrentUser - Login and/or Get Current User Info
   * 
   * This endpoint does the following two operations:
   *   1) Checks if you are already logged in by looking for a valid `auth` cookie. If you are have a valid auth cookie then no additional auth-related actions are taken. If you are **not** logged in then it will log you in with the `Authorization` header and set the `auth` cookie. The `auth` cookie will only be sent once.
   *   2) If logged in, this function will also return the CurrentUser object containing detailed information about the currently logged in user.
   * 
   * The auth string after `Authorization: Basic {string}` is a base64-encoded string of the username and password, both individually url-encoded, and then joined with a colon.
   *   
   * > base64(urlencode(username):urlencode(password))
   * 
   * **WARNING: Session Limit:** Each authentication with login credentials counts as a separate session, out of which you have a limited amount. Make sure to save and reuse the `auth` cookie if you are often restarting the program. The provided API libraries automatically save cookies during runtime, but does not persist during restart. While it can be fine to use username/password during development, expect in production to very fast run into the rate-limit and be temporarily blocked from making new sessions until older ones expire. The exact number of simultaneous sessions is unknown/undisclosed.
   */
  'getCurrentUser'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCurrentUser.Responses.$200>
  /**
   * verify2FA - Verify 2FA code
   * 
   * Finishes the login sequence with a normal 2FA-generated code for accounts with 2FA-protection enabled.
   */
  'verify2FA'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.Verify2FA.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.Verify2FA.Responses.$200>
  /**
   * verifyRecoveryCode - Verify 2FA code with Recovery code
   * 
   * Finishes the login sequence with an OTP (One Time Password) recovery code for accounts with 2FA-protection enabled.
   */
  'verifyRecoveryCode'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.VerifyRecoveryCode.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.VerifyRecoveryCode.Responses.$200>
  /**
   * verify2FAEmailCode - Verify 2FA email code
   * 
   * Finishes the login sequence with an 2FA email code.
   */
  'verify2FAEmailCode'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.Verify2FAEmailCode.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.Verify2FAEmailCode.Responses.$200>
  /**
   * verifyAuthToken - Verify Auth Token
   * 
   * Verify whether the currently provided Auth Token is valid.
   */
  'verifyAuthToken'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.VerifyAuthToken.Responses.$200>
  /**
   * logout - Logout
   * 
   * Invalidates the login session.
   */
  'logout'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.Logout.Responses.$200>
  /**
   * deleteUser - Delete User
   * 
   * Deletes the account with given ID. Normal users only have permission to delete their own account. Account deletion is 14 days from this request, and will be cancelled if you do an authenticated request with the account afterwards.
   * 
   * **VRC+ NOTE:** Despite the 14-days cooldown, any VRC+ subscription will be cancelled **immediately**.
   * 
   * **METHOD NOTE:** Despite this being a Delete action, the method type required is PUT.
   */
  'deleteUser'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteUser.Responses.$200>
  /**
   * getOwnAvatar - Get Own Avatar
   * 
   * Get the current avatar for the user. This will return an error for any other user than the one logged in.
   */
  'getOwnAvatar'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetOwnAvatar.Responses.$200>
  /**
   * searchAvatars - Search Avatars
   * 
   * Search and list avatars by query filters. You can only search your own or featured avatars. It is not possible as a normal user to search other peoples avatars.
   */
  'searchAvatars'(
    parameters?: Parameters<Paths.SearchAvatars.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SearchAvatars.Responses.$200>
  /**
   * createAvatar - Create Avatar
   * 
   * Create an avatar. It's possible to optionally specify a ID if you want a custom one. Attempting to create an Avatar with an already claimed ID will result in a DB error.
   */
  'createAvatar'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateAvatar.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateAvatar.Responses.$200>
  /**
   * getAvatar - Get Avatar
   * 
   * Get information about a specific Avatar.
   */
  'getAvatar'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAvatar.Responses.$200>
  /**
   * updateAvatar - Update Avatar
   * 
   * Update information about a specific avatar.
   */
  'updateAvatar'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateAvatar.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateAvatar.Responses.$200>
  /**
   * deleteAvatar - Delete Avatar
   * 
   * Delete an avatar. Notice an avatar is never fully "deleted", only its ReleaseStatus is set to "hidden" and the linked Files are deleted. The AvatarID is permanently reserved.
   */
  'deleteAvatar'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteAvatar.Responses.$200>
  /**
   * selectAvatar - Select Avatar
   * 
   * Switches into that avatar.
   */
  'selectAvatar'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SelectAvatar.Responses.$200>
  /**
   * selectFallbackAvatar - Select Fallback Avatar
   * 
   * Switches into that avatar as your fallback avatar.
   */
  'selectFallbackAvatar'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SelectFallbackAvatar.Responses.$200>
  /**
   * getFavoritedAvatars - List Favorited Avatars
   * 
   * Search and list favorited avatars by query filters.
   */
  'getFavoritedAvatars'(
    parameters?: Parameters<Paths.GetFavoritedAvatars.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFavoritedAvatars.Responses.$200>
  /**
   * getSteamTransactions - List Steam Transactions
   * 
   * Get all own Steam transactions.
   */
  'getSteamTransactions'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSteamTransactions.Responses.$200>
  /**
   * getSteamTransaction - Get Steam Transaction
   * 
   * Get a single Steam transactions by ID. This returns the exact same information as `getSteamTransactions`, so no point in using this endpoint.
   */
  'getSteamTransaction'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSteamTransaction.Responses.$200>
  /**
   * getCurrentSubscriptions - Get Current Subscriptions
   * 
   * Get a list of all current user subscriptions.
   */
  'getCurrentSubscriptions'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCurrentSubscriptions.Responses.$200>
  /**
   * getSubscriptions - List Subscriptions
   * 
   * List all existing Subscriptions. For example, "vrchatplus-monthly" and "vrchatplus-yearly".
   */
  'getSubscriptions'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSubscriptions.Responses.$200>
  /**
   * getLicenseGroup - Get License Group
   * 
   * Get a single License Group by given ID.
   */
  'getLicenseGroup'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetLicenseGroup.Responses.$200>
  /**
   * getFavorites - List Favorites
   * 
   * Returns a list of favorites.
   */
  'getFavorites'(
    parameters?: Parameters<Paths.GetFavorites.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFavorites.Responses.$200>
  /**
   * addFavorite - Add Favorite
   * 
   * Add a new favorite.
   * 
   * Friend groups are named `group_0` through `group_3`. Avatar and World groups are named `avatars1` to `avatars4` and `worlds1` to `worlds4`.
   * 
   * You cannot add people whom you are not friends with to your friends list. Destroying a friendship removes the person as favorite on both sides.
   */
  'addFavorite'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.AddFavorite.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AddFavorite.Responses.$200>
  /**
   * getFavorite - Show Favorite
   * 
   * Return information about a specific Favorite.
   */
  'getFavorite'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFavorite.Responses.$200>
  /**
   * removeFavorite - Remove Favorite
   * 
   * Remove a favorite from your favorites list.
   */
  'removeFavorite'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.RemoveFavorite.Responses.$200>
  /**
   * getFavoriteGroups - List Favorite Groups
   * 
   * Return a list of favorite groups owned by a user. Returns the same information as `getFavoriteGroups`.
   */
  'getFavoriteGroups'(
    parameters?: Parameters<Paths.GetFavoriteGroups.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFavoriteGroups.Responses.$200>
  /**
   * getFavoriteGroup - Show Favorite Group
   * 
   * Fetch information about a specific favorite group.
   */
  'getFavoriteGroup'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFavoriteGroup.Responses.$200>
  /**
   * updateFavoriteGroup - Update Favorite Group
   * 
   * Update information about a specific favorite group.
   */
  'updateFavoriteGroup'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateFavoriteGroup.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateFavoriteGroup.Responses.$200>
  /**
   * clearFavoriteGroup - Clear Favorite Group
   * 
   * Clear ALL contents of a specific favorite group.
   */
  'clearFavoriteGroup'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ClearFavoriteGroup.Responses.$200>
  /**
   * getFiles - List Files
   * 
   * Returns a list of files
   */
  'getFiles'(
    parameters?: Parameters<Paths.GetFiles.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFiles.Responses.$200>
  /**
   * createFile - Create File
   * 
   * Creates a new File object
   */
  'createFile'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateFile.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateFile.Responses.$200>
  /**
   * getFile - Show File
   * 
   * Shows general information about the "File" object. Each File can have several "Version"'s, and each Version can have multiple real files or "Data" blobs.
   */
  'getFile'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFile.Responses.$200>
  /**
   * createFileVersion - Create File Version
   * 
   * Creates a new FileVersion. Once a Version has been created, proceed to the `/file/{fileId}/{versionId}/file/start` endpoint to start a file upload.
   */
  'createFileVersion'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateFileVersion.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateFileVersion.Responses.$200>
  /**
   * deleteFile - Delete File
   * 
   * Deletes a File object.
   */
  'deleteFile'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteFile.Responses.$200>
  /**
   * downloadFileVersion - Download File Version
   * 
   * Downloads the file with the provided version number.
   * 
   * **Version Note:** Version 0 is always when the file was created. The real data is usually always located in version 1 and up.
   * 
   * **Extension Note:** Files are not guaranteed to have a file extensions. UnityPackage files tends to have it, images through this endpoint do not. You are responsible for appending file extension from the `extension` field when neccesary.
   */
  'downloadFileVersion'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DownloadFileVersion.Responses.$200>
  /**
   * deleteFileVersion - Delete File Version
   * 
   * Delete a specific version of a file. You can only delete the latest version.
   */
  'deleteFileVersion'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteFileVersion.Responses.$200>
  /**
   * finishFileDataUpload - Finish FileData Upload
   * 
   * Finish an upload of a FileData. This will mark it as "complete". After uploading the `file` for Avatars and Worlds you then have to upload a `signature` file.
   */
  'finishFileDataUpload'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.FinishFileDataUpload.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.FinishFileDataUpload.Responses.$200>
  /**
   * startFileDataUpload - Start FileData Upload
   * 
   * Starts an upload of a specific FilePart. This endpoint will return an AWS URL which you can PUT data to. You need to call this and receive a new AWS API URL for each `partNumber`. Please see AWS's REST documentation on "PUT Object to S3" on how to upload. Once all parts has been uploaded, proceed to `/finish` endpoint.
   * 
   * **Note:** `nextPartNumber` seems like it is always ignored. Despite it returning 0, first partNumber is always 1.
   */
  'startFileDataUpload'(
    parameters?: Parameters<Paths.StartFileDataUpload.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.StartFileDataUpload.Responses.$200>
  /**
   * getFileDataUploadStatus - Check FileData Upload Status
   * 
   * Retrieves the upload status for file upload. Can currently only be accessed when `status` is `waiting`. Trying to access it on a file version already uploaded currently times out.
   */
  'getFileDataUploadStatus'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFileDataUploadStatus.Responses.$200>
  /**
   * getFriends - List Friends
   * 
   * List information about friends.
   */
  'getFriends'(
    parameters?: Parameters<Paths.GetFriends.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFriends.Responses.$200>
  /**
   * friend - Send Friend Request
   * 
   * Send a friend request to another user.
   */
  'friend'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.Friend.Responses.$200>
  /**
   * deleteFriendRequest - Delete Friend Request
   * 
   * Deletes an outgoing pending friend request to another user. To delete an incoming friend request, use the `deleteNotification` endpoint instead.
   */
  'deleteFriendRequest'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteFriendRequest.Responses.$200>
  /**
   * getFriendStatus - Check Friend Status
   * 
   * Retrieve if the user is currently a friend with a given user, if they have an outgoing friend request, and if they have an incoming friend request. The proper way to receive and accept friend request is by checking if the user has an incoming `Notification` of type `friendRequest`, and then accepting that notification.
   */
  'getFriendStatus'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFriendStatus.Responses.$200>
  /**
   * unfriend - Unfriend
   * 
   * Unfriend a user by ID.
   */
  'unfriend'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.Unfriend.Responses.$200>
  /**
   * searchGroups - Search Group
   * 
   * Searches Groups by name or shortCode
   */
  'searchGroups'(
    parameters?: Parameters<Paths.SearchGroups.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SearchGroups.Responses.$200>
  /**
   * createGroup - Create Group
   * 
   * Creates a Group and returns a Group object. **Requires VRC+ Subscription.**
   */
  'createGroup'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateGroup.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateGroup.Responses.$200>
  /**
   * getGroup - Get Group by ID
   * 
   * Returns a single Group by ID.
   */
  'getGroup'(
    parameters?: Parameters<Paths.GetGroup.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetGroup.Responses.$200>
  /**
   * updateGroup - Update Group
   * 
   * Updates a Group and returns it.
   */
  'updateGroup'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateGroup.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateGroup.Responses.$200>
  /**
   * deleteGroup - Delete Group
   * 
   * Deletes a Group.
   */
  'deleteGroup'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteGroup.Responses.$200>
  /**
   * getGroupInstances - Get Group Instances
   * 
   * Returns an array of Instances
   */
  'getGroupInstances'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetGroupInstances.Responses.$200>
  /**
   * getGroupAnnouncements - Get Group Announcement
   * 
   * Returns the announcement for a Group.
   * If no announcement has been made, then it returns **empty object**. 
   * If an announcement exists, then it will always return all fields except `imageId` and `imageUrl` which may be null.
   */
  'getGroupAnnouncements'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetGroupAnnouncements.Responses.$200>
  /**
   * createGroupAnnouncement - Create Group Announcement
   * 
   * Creates an Announcement for a Group.
   */
  'createGroupAnnouncement'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateGroupAnnouncement.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateGroupAnnouncement.Responses.$200>
  /**
   * deleteGroupAnnouncement - Delete Group Announcement
   * 
   * Deletes the announcement for a Group.
   */
  'deleteGroupAnnouncement'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteGroupAnnouncement.Responses.$200>
  /**
   * getGroupAuditLogs - Get Group Audit Logs
   * 
   * Returns a list of audit logs for a Group.
   */
  'getGroupAuditLogs'(
    parameters?: Parameters<Paths.GetGroupAuditLogs.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetGroupAuditLogs.Responses.$200>
  /**
   * getGroupBans - Get Group Bans
   * 
   * Returns a list of banned users for a Group.
   */
  'getGroupBans'(
    parameters?: Parameters<Paths.GetGroupBans.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetGroupBans.Responses.$200>
  /**
   * banGroupMember - Ban Group Member
   * 
   * Bans a user from a Group.
   */
  'banGroupMember'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.BanGroupMember.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.BanGroupMember.Responses.$200>
  /**
   * unbanGroupMember - Unban Group Member
   * 
   * Unbans a user from a Group.
   */
  'unbanGroupMember'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UnbanGroupMember.Responses.$200>
  /**
   * createGroupGallery - Create Group Gallery
   * 
   * Creates a gallery for a Group.
   */
  'createGroupGallery'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateGroupGallery.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateGroupGallery.Responses.$200>
  /**
   * getGroupGalleryImages - Get Group Gallery Images
   * 
   * Returns a list of images for a Group gallery.
   */
  'getGroupGalleryImages'(
    parameters?: Parameters<Paths.GetGroupGalleryImages.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetGroupGalleryImages.Responses.$200>
  /**
   * updateGroupGallery - Update Group Gallery
   * 
   * Updates a gallery for a Group.
   */
  'updateGroupGallery'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateGroupGallery.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateGroupGallery.Responses.$200>
  /**
   * deleteGroupGallery - Delete Group Gallery
   * 
   * Deletes a gallery for a Group.
   */
  'deleteGroupGallery'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteGroupGallery.Responses.$200>
  /**
   * addGroupGalleryImage - Add Group Gallery Image
   * 
   * Adds an image to a Group gallery.
   */
  'addGroupGalleryImage'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.AddGroupGalleryImage.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AddGroupGalleryImage.Responses.$200>
  /**
   * deleteGroupGalleryImage - Delete Group Gallery Image
   * 
   * Deletes an image from a Group gallery.
   */
  'deleteGroupGalleryImage'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteGroupGalleryImage.Responses.$200>
  /**
   * getGroupInvites - Get Group Invites Sent
   * 
   * Returns a list of members that have been invited to the Group.
   */
  'getGroupInvites'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetGroupInvites.Responses.$200>
  /**
   * createGroupInvite - Invite User to Group
   * 
   * Sends an invite to a user to join the group.
   */
  'createGroupInvite'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateGroupInvite.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateGroupInvite.Responses.$200>
  /**
   * deleteGroupInvite - Delete User Invite
   * 
   * Deletes an Group invite sent to a User
   */
  'deleteGroupInvite'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteGroupInvite.Responses.$200>
  /**
   * joinGroup - Join Group
   * 
   * Join a Group by ID and returns the member object.
   */
  'joinGroup'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.JoinGroup.Responses.$200>
  /**
   * leaveGroup - Leave Group
   * 
   * Leave a group by ID.
   */
  'leaveGroup'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.LeaveGroup.Responses.$200>
  /**
   * getGroupMembers - List Group Members
   * 
   * Returns a List of all **other** Group Members. This endpoint will never return the user calling the endpoint.
   * Information about the user calling the endpoint must be found in the `myMember` field of the Group object.
   */
  'getGroupMembers'(
    parameters?: Parameters<Paths.GetGroupMembers.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetGroupMembers.Responses.$200>
  /**
   * getGroupMember - Get Group Member
   * 
   * Returns a LimitedGroup Member.
   */
  'getGroupMember'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetGroupMember.Responses.$200>
  /**
   * updateGroupMember - Update Group Member
   * 
   * Updates a Group Member
   */
  'updateGroupMember'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateGroupMember.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateGroupMember.Responses.$200>
  /**
   * kickGroupMember - Kick Group Member
   * 
   * Kicks a Group Member from the Group. The current user must have the "Remove Group Members" permission.
   */
  'kickGroupMember'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.KickGroupMember.Responses.$200>
  /**
   * addGroupMemberRole - Add Role to GroupMember
   * 
   * Adds a Role to a Group Member
   */
  'addGroupMemberRole'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AddGroupMemberRole.Responses.$200>
  /**
   * removeGroupMemberRole - Remove Role from GroupMember
   * 
   * Removes a Role from a Group Member
   */
  'removeGroupMemberRole'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.RemoveGroupMemberRole.Responses.$200>
  /**
   * getGroupPermissions - List Group Permissions
   * 
   * Returns a List of all possible/available permissions for a Group.
   */
  'getGroupPermissions'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetGroupPermissions.Responses.$200>
  /**
   * getGroupRequests - Get Group Join Requests
   * 
   * Returns a list of members that have requested to join the Group.
   */
  'getGroupRequests'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetGroupRequests.Responses.$200>
  /**
   * cancelGroupRequest - Cancel Group Join Request
   * 
   * Cancels a request sent to join the group.
   */
  'cancelGroupRequest'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CancelGroupRequest.Responses.$200>
  /**
   * respondGroupJoinRequest - Respond Group Join request
   * 
   * Responds to a Group Join Request with Accept/Deny
   */
  'respondGroupJoinRequest'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.RespondGroupJoinRequest.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.RespondGroupJoinRequest.Responses.$200>
  /**
   * getGroupRoles - Get Group Roles
   * 
   * Returns a Group Role by ID.
   */
  'getGroupRoles'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetGroupRoles.Responses.$200>
  /**
   * createGroupRole - Create GroupRole
   * 
   * Create a Group role.
   */
  'createGroupRole'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateGroupRole.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateGroupRole.Responses.$200>
  /**
   * updateGroupRole - Update Group Role
   * 
   * Updates a group role by ID.
   */
  'updateGroupRole'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateGroupRole.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateGroupRole.Responses.$200>
  /**
   * deleteGroupRole - Delete Group Role
   * 
   * Deletes a Group Role by ID and returns the remaining roles.
   */
  'deleteGroupRole'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteGroupRole.Responses.$200>
  /**
   * inviteUser - Invite User
   * 
   * Sends an invite to a user. Returns the Notification of type `invite` that was sent.
   */
  'inviteUser'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.InviteUser.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.InviteUser.Responses.$200>
  /**
   * inviteMyselfTo - Invite Myself To Instance
   * 
   * Sends self an invite to an instance
   */
  'inviteMyselfTo'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.InviteMyselfTo.Responses.$200>
  /**
   * requestInvite - Request Invite
   * 
   * Requests an invite from a user. Returns the Notification of type `requestInvite` that was sent.
   */
  'requestInvite'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.RequestInvite.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.RequestInvite.Responses.$200>
  /**
   * respondInvite - Respond Invite
   * 
   * Respond to an invite request by sending a world invite to the requesting user. `:notificationId` is the ID of the requesting notification.
   */
  'respondInvite'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.RespondInvite.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.RespondInvite.Responses.$200>
  /**
   * getInviteMessages - List Invite Messages
   * 
   * Returns a list of all the users Invite Messages. Admin Credentials are required to view messages of other users!
   * 
   * Message type refers to a different collection of messages, used during different types of responses.
   * 
   * * `message` = Message during a normal invite
   * * `response` = Message when replying to a message
   * * `request` = Message when requesting an invite
   * * `requestResponse` = Message when replying to a request for invite
   */
  'getInviteMessages'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetInviteMessages.Responses.$200>
  /**
   * getInviteMessage - Get Invite Message
   * 
   * Returns a single Invite Message. This returns the exact same information but less than `getInviteMessages`. Admin Credentials are required to view messages of other users!
   * 
   * Message type refers to a different collection of messages, used during different types of responses.
   * 
   * * `message` = Message during a normal invite
   * * `response` = Message when replying to a message
   * * `request` = Message when requesting an invite
   * * `requestResponse` = Message when replying to a request for invite
   */
  'getInviteMessage'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetInviteMessage.Responses.$200>
  /**
   * updateInviteMessage - Update Invite Message
   * 
   * Updates a single Invite Message and then returns a list of all of them. Admin Credentials are required to update messages of other users!
   * 
   * Updating a message automatically sets the cooldown timer to 60 minutes.
   * Trying to edit a message before the cooldown timer expires results in a 429 "Too Fast Error".
   * 
   * Message type refers to a different collection of messages, used during different types of responses.
   * 
   * * `message` = Message during a normal invite
   * * `response` = Message when replying to a message
   * * `request` = Message when requesting an invite
   * * `requestResponse` = Message when replying to a request for invite
   */
  'updateInviteMessage'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateInviteMessage.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateInviteMessage.Responses.$200>
  /**
   * resetInviteMessage - Reset Invite Message
   * 
   * Resets a single Invite Message back to its original message, and then returns a list of all of them. Admin Credentials are required to update messages of other users!
   * 
   * Resetting a message respects the rate-limit, so it is not possible to reset within the 60 minutes countdown.
   * Resetting it does however not set the rate-limit to 60 like when editing it.
   * It is possible to edit it right after resetting it.
   * Trying to edit a message before the cooldown timer expires results in a 429 "Too Fast Error".
   * 
   * Message type refers to a different collection of messages, used during different types of responses.
   * 
   * * `message` = Message during a normal invite
   * * `response` = Message when replying to a message
   * * `request` = Message when requesting an invite
   * * `requestResponse` = Message when replying to a request for invite
   * 
   * The DELETE endpoint does not have/require any request body.
   */
  'resetInviteMessage'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ResetInviteMessage.Responses.$200>
  /**
   * getInstance - Get Instance
   * 
   * Returns an instance. Please read [Instances Tutorial](https://vrchatapi.github.io/tutorials/instances/) for more information on Instances.
   * 
   * If an invalid instanceId is provided, this endpoint will simply return "null"!
   */
  'getInstance'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetInstance.Responses.$200>
  /**
   * getShortName - Get Instance Short Name
   * 
   * Returns an instance short name.
   */
  'getShortName'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetShortName.Responses.$200>
  /**
   * sendSelfInvite - Send Self Invite
   * 
   * Sends an invite to the instance to yourself.
   */
  'sendSelfInvite'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SendSelfInvite.Responses.$200>
  /**
   * getInstanceByShortName - Get Instance By Short Name
   * 
   * Returns an instance. Please read [Instances Tutorial](https://vrchatapi.github.io/tutorials/instances/) for more information on Instances.
   */
  'getInstanceByShortName'(
    parameters?: Parameters<Paths.InstancesS$ShortName.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetInstanceByShortName.Responses.$200>
  /**
   * getNotifications - List Notifications
   * 
   * Retrieve all of the current user's notifications.
   */
  'getNotifications'(
    parameters?: Parameters<Paths.GetNotifications.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetNotifications.Responses.$200>
  /**
   * acceptFriendRequest - Accept Friend Request
   * 
   * Accept a friend request by notification `frq_` ID. Friend requests can be found using the NotificationsAPI `getNotifications` by filtering of type `friendRequest`.
   */
  'acceptFriendRequest'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AcceptFriendRequest.Responses.$200>
  /**
   * markNotificationAsRead - Mark Notification As Read
   * 
   * Mark a notification as seen.
   */
  'markNotificationAsRead'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.MarkNotificationAsRead.Responses.$200>
  /**
   * deleteNotification - Delete Notification
   * 
   * Delete a notification.
   */
  'deleteNotification'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteNotification.Responses.$200>
  /**
   * clearNotifications - Clear All Notifications
   * 
   * Clear **all** notifications.
   */
  'clearNotifications'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ClearNotifications.Responses.$200>
  /**
   * getAssignedPermissions - Get Assigned Permissions
   * 
   * Returns a list of all permissions currently granted by the user. Permissions are assigned e.g. by subscribing to VRC+.
   */
  'getAssignedPermissions'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAssignedPermissions.Responses.$200>
  /**
   * getPermission - Get Permission
   * 
   * Returns a single permission. This endpoint is pretty useless, as it returns the exact same information as `/auth/permissions`.
   */
  'getPermission'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPermission.Responses.$200>
  /**
   * getPlayerModerations - Search Player Moderations
   * 
   * Returns a list of all player moderations made by **you**.
   * 
   * This endpoint does not have pagination, and will return *all* results. Use query parameters to limit your query if needed.
   */
  'getPlayerModerations'(
    parameters?: Parameters<Paths.GetPlayerModerations.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPlayerModerations.Responses.$200>
  /**
   * moderateUser - Moderate User
   * 
   * Moderate a user, e.g. unmute them or show their avatar.
   * 
   * Please see the [Player Moderation docs](https://vrchatapi.github.io/docs/api/#tag--playermoderation) on what playerModerations are, and how they differ from staff moderations.
   */
  'moderateUser'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.ModerateUser.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ModerateUser.Responses.$200>
  /**
   * clearAllPlayerModerations - Clear All Player Moderations
   * 
   * ⚠️ **This will delete every single player moderation you've ever made.**
   */
  'clearAllPlayerModerations'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ClearAllPlayerModerations.Responses.$200>
  /**
   * getPlayerModeration - Get Player Moderation
   * 
   * Returns a single Player Moderation. This returns the exact same amount of information as the more generalised `getPlayerModerations`.
   */
  'getPlayerModeration'(
    parameters?: Parameters<Paths.AuthUserPlayermoderations$PlayerModerationId.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPlayerModeration.Responses.$200>
  /**
   * deletePlayerModeration - Delete Player Moderation
   * 
   * Deletes a specific player moderation based on it's `pmod_` ID. The website uses `unmoderateUser` instead. You can delete the same player moderation multiple times successfully.
   */
  'deletePlayerModeration'(
    parameters?: Parameters<Paths.AuthUserPlayermoderations$PlayerModerationId.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeletePlayerModeration.Responses.$200>
  /**
   * unmoderateUser - Unmoderate User
   * 
   * Removes a player moderation previously added through `moderateUser`. E.g if you previously have shown their avatar, but now want to reset it to default.
   */
  'unmoderateUser'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UnmoderateUser.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UnmoderateUser.Responses.$200>
  /**
   * getConfig - Fetch API Config
   * 
   * API config contains configuration that the clients needs to work properly.
   * 
   * Currently the most important value here is `clientApiKey` which is used for all other API endpoints.
   */
  'getConfig'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetConfig.Responses.$200>
  /**
   * getInfoPush - Show Information Notices
   * 
   * IPS (Info Push System) is a system for VRChat to push out dynamic information to the client. This is primarily used by the Quick-Menu info banners, but can also be used to e.g. alert you to update your game to the latest version.
   * 
   * `include` is used to query what Information Pushes should be included in the response. If include is missing or empty, then no notices will normally be returned. This is an "any of" search.
   * 
   * `require` is used to limit what Information Pushes should be included in the response. This is usually used in combination with `include`, and is an "all of" search.
   */
  'getInfoPush'(
    parameters?: Parameters<Paths.GetInfoPush.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetInfoPush.Responses.$200>
  /**
   * getCSS - Download CSS
   * 
   * Fetches the CSS code to the frontend React website.
   */
  'getCSS'(
    parameters?: Parameters<Paths.GetCSS.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCSS.Responses.$200>
  /**
   * getJavaScript - Download JavaScript
   * 
   * Fetches the JavaScript code to the frontend React website.
   */
  'getJavaScript'(
    parameters?: Parameters<Paths.GetJavaScript.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getHealth - Check API Health
   * 
   * ~~Gets the overall health status, the server name, and the current build version tag of the API.~~
   * 
   * **DEPRECATED:** VRChat has suddenly restricted this endpoint for unknown reasons, and now always return 401 Unauthorized.
   */
  'getHealth'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetHealth.Responses.$200>
  /**
   * getCurrentOnlineUsers - Current Online Users
   * 
   * Returns the current number of online users.
   * 
   * **NOTE:** The response type is not a JSON object, but a simple JSON integer.
   */
  'getCurrentOnlineUsers'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCurrentOnlineUsers.Responses.$200>
  /**
   * getSystemTime - Current System Time
   * 
   * Returns the current time of the API server.
   * 
   * **NOTE:** The response type is not a JSON object, but a simple JSON string.
   */
  'getSystemTime'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSystemTime.Responses.$200>
  /**
   * searchUsers - Search All Users
   * 
   * Search and list any users by text query
   */
  'searchUsers'(
    parameters?: Parameters<Paths.SearchUsers.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SearchUsers.Responses.$200>
  /**
   * getUserByName - Get User by Username
   * 
   * ~~Get public user information about a specific user using their name.~~
   * 
   * **DEPRECATED:** VRChat API no longer return usernames of other users. [See issue by Tupper for more information](https://github.com/pypy-vrc/VRCX/issues/429).
   * This endpoint now require Admin Credentials.
   */
  'getUserByName'(
    parameters?: Parameters<Paths.Users$UsernameName.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetUserByName.Responses.$200>
  /**
   * getUser - Get User by ID
   * 
   * Get public user information about a specific user using their ID.
   */
  'getUser'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetUser.Responses.$200>
  /**
   * updateUser - Update User Info
   * 
   * Update a users information such as the email and birthday.
   */
  'updateUser'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateUser.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateUser.Responses.$200>
  /**
   * getUserGroups - Get User Groups
   * 
   * Get user's public groups
   */
  'getUserGroups'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetUserGroups.Responses.$200>
  /**
   * getUserGroupRequests - Get User Group Requests
   * 
   * Returns a list of Groups the user has requested to be invited into.
   */
  'getUserGroupRequests'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetUserGroupRequests.Responses.$200>
  /**
   * searchWorlds - Search All Worlds
   * 
   * Search and list any worlds by query filters.
   */
  'searchWorlds'(
    parameters?: Parameters<Paths.SearchWorlds.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SearchWorlds.Responses.$200>
  /**
   * createWorld - Create World
   * 
   * Create a new world. This endpoint requires `assetUrl` to be a valid File object with `.vrcw` file extension, and `imageUrl` to be a valid File object with an image file extension.
   */
  'createWorld'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateWorld.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateWorld.Responses.$200>
  /**
   * getActiveWorlds - List Active Worlds
   * 
   * Search and list currently Active worlds by query filters.
   */
  'getActiveWorlds'(
    parameters?: Parameters<Paths.GetActiveWorlds.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetActiveWorlds.Responses.$200>
  /**
   * getFavoritedWorlds - List Favorited Worlds
   * 
   * Search and list favorited worlds by query filters.
   */
  'getFavoritedWorlds'(
    parameters?: Parameters<Paths.GetFavoritedWorlds.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFavoritedWorlds.Responses.$200>
  /**
   * getRecentWorlds - List Recent Worlds
   * 
   * Search and list recently visited worlds by query filters.
   */
  'getRecentWorlds'(
    parameters?: Parameters<Paths.GetRecentWorlds.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetRecentWorlds.Responses.$200>
  /**
   * getWorld - Get World by ID
   * 
   * Get information about a specific World.
   * Works unauthenticated but when so will always return `0` for certain fields.
   */
  'getWorld'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetWorld.Responses.$200>
  /**
   * updateWorld - Update World
   * 
   * Update information about a specific World.
   */
  'updateWorld'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateWorld.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateWorld.Responses.$200>
  /**
   * deleteWorld - Delete World
   * 
   * Delete a world. Notice a world is never fully "deleted", only its ReleaseStatus is set to "hidden" and the linked Files are deleted. The WorldID is permanently reserved.
   */
  'deleteWorld'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteWorld.Responses.$200>
  /**
   * getWorldMetadata - Get World Metadata
   * 
   * Return a worlds custom metadata. This is currently believed to be unused. Metadata can be set with `updateWorld` and can be any arbitrary object.
   */
  'getWorldMetadata'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetWorldMetadata.Responses.$200>
  /**
   * getWorldPublishStatus - Get World Publish Status
   * 
   * Returns a worlds publish status.
   */
  'getWorldPublishStatus'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetWorldPublishStatus.Responses.$200>
  /**
   * publishWorld - Publish World
   * 
   * Publish a world. You can only publish one world per week.
   */
  'publishWorld'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PublishWorld.Responses.$200>
  /**
   * unpublishWorld - Unpublish World
   * 
   * Unpublish a world.
   */
  'unpublishWorld'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UnpublishWorld.Responses.$200>
  /**
   * getWorldInstance - Get World Instance
   * 
   * Returns a worlds instance.
   */
  'getWorldInstance'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetWorldInstance.Responses.$200>
}

export interface PathsDictionary {
  ['/auth/exists']: {
    /**
     * checkUserExists - Check User Exists
     * 
     * Checks if a user by a given `username`, `displayName` or `email` exist. This is used during registration to check if a username has already been taken, during change of displayName to check if a displayName is available, and during change of email to check if the email is already used. In the later two cases the `excludeUserId` is used to exclude oneself, otherwise the result would always be true.
     * 
     * It is **REQUIRED** to include **AT LEAST** `username`, `displayName` **or** `email` query parameter. Although they can be combined - in addition with `excludeUserId` (generally to exclude yourself) - to further fine-tune the search.
     */
    'get'(
      parameters?: Parameters<Paths.CheckUserExists.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CheckUserExists.Responses.$200>
  }
  ['/auth/user']: {
    /**
     * getCurrentUser - Login and/or Get Current User Info
     * 
     * This endpoint does the following two operations:
     *   1) Checks if you are already logged in by looking for a valid `auth` cookie. If you are have a valid auth cookie then no additional auth-related actions are taken. If you are **not** logged in then it will log you in with the `Authorization` header and set the `auth` cookie. The `auth` cookie will only be sent once.
     *   2) If logged in, this function will also return the CurrentUser object containing detailed information about the currently logged in user.
     * 
     * The auth string after `Authorization: Basic {string}` is a base64-encoded string of the username and password, both individually url-encoded, and then joined with a colon.
     *   
     * > base64(urlencode(username):urlencode(password))
     * 
     * **WARNING: Session Limit:** Each authentication with login credentials counts as a separate session, out of which you have a limited amount. Make sure to save and reuse the `auth` cookie if you are often restarting the program. The provided API libraries automatically save cookies during runtime, but does not persist during restart. While it can be fine to use username/password during development, expect in production to very fast run into the rate-limit and be temporarily blocked from making new sessions until older ones expire. The exact number of simultaneous sessions is unknown/undisclosed.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCurrentUser.Responses.$200>
  }
  ['/auth/twofactorauth/totp/verify']: {
    /**
     * verify2FA - Verify 2FA code
     * 
     * Finishes the login sequence with a normal 2FA-generated code for accounts with 2FA-protection enabled.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.Verify2FA.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.Verify2FA.Responses.$200>
  }
  ['/auth/twofactorauth/otp/verify']: {
    /**
     * verifyRecoveryCode - Verify 2FA code with Recovery code
     * 
     * Finishes the login sequence with an OTP (One Time Password) recovery code for accounts with 2FA-protection enabled.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.VerifyRecoveryCode.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.VerifyRecoveryCode.Responses.$200>
  }
  ['/auth/twofactorauth/emailotp/verify']: {
    /**
     * verify2FAEmailCode - Verify 2FA email code
     * 
     * Finishes the login sequence with an 2FA email code.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.Verify2FAEmailCode.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.Verify2FAEmailCode.Responses.$200>
  }
  ['/auth']: {
    /**
     * verifyAuthToken - Verify Auth Token
     * 
     * Verify whether the currently provided Auth Token is valid.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.VerifyAuthToken.Responses.$200>
  }
  ['/logout']: {
    /**
     * logout - Logout
     * 
     * Invalidates the login session.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.Logout.Responses.$200>
  }
  ['/users/{userId}/delete']: {
    /**
     * deleteUser - Delete User
     * 
     * Deletes the account with given ID. Normal users only have permission to delete their own account. Account deletion is 14 days from this request, and will be cancelled if you do an authenticated request with the account afterwards.
     * 
     * **VRC+ NOTE:** Despite the 14-days cooldown, any VRC+ subscription will be cancelled **immediately**.
     * 
     * **METHOD NOTE:** Despite this being a Delete action, the method type required is PUT.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteUser.Responses.$200>
  }
  ['/users/{userId}/avatar']: {
    /**
     * getOwnAvatar - Get Own Avatar
     * 
     * Get the current avatar for the user. This will return an error for any other user than the one logged in.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetOwnAvatar.Responses.$200>
  }
  ['/avatars']: {
    /**
     * searchAvatars - Search Avatars
     * 
     * Search and list avatars by query filters. You can only search your own or featured avatars. It is not possible as a normal user to search other peoples avatars.
     */
    'get'(
      parameters?: Parameters<Paths.SearchAvatars.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SearchAvatars.Responses.$200>
    /**
     * createAvatar - Create Avatar
     * 
     * Create an avatar. It's possible to optionally specify a ID if you want a custom one. Attempting to create an Avatar with an already claimed ID will result in a DB error.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateAvatar.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateAvatar.Responses.$200>
  }
  ['/avatars/{avatarId}']: {
    /**
     * getAvatar - Get Avatar
     * 
     * Get information about a specific Avatar.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAvatar.Responses.$200>
    /**
     * updateAvatar - Update Avatar
     * 
     * Update information about a specific avatar.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateAvatar.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateAvatar.Responses.$200>
    /**
     * deleteAvatar - Delete Avatar
     * 
     * Delete an avatar. Notice an avatar is never fully "deleted", only its ReleaseStatus is set to "hidden" and the linked Files are deleted. The AvatarID is permanently reserved.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteAvatar.Responses.$200>
  }
  ['/avatars/{avatarId}/select']: {
    /**
     * selectAvatar - Select Avatar
     * 
     * Switches into that avatar.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SelectAvatar.Responses.$200>
  }
  ['/avatars/{avatarId}/selectFallback']: {
    /**
     * selectFallbackAvatar - Select Fallback Avatar
     * 
     * Switches into that avatar as your fallback avatar.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SelectFallbackAvatar.Responses.$200>
  }
  ['/avatars/favorites']: {
    /**
     * getFavoritedAvatars - List Favorited Avatars
     * 
     * Search and list favorited avatars by query filters.
     */
    'get'(
      parameters?: Parameters<Paths.GetFavoritedAvatars.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFavoritedAvatars.Responses.$200>
  }
  ['/Steam/transactions']: {
    /**
     * getSteamTransactions - List Steam Transactions
     * 
     * Get all own Steam transactions.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSteamTransactions.Responses.$200>
  }
  ['/Steam/transactions/{transactionId}']: {
    /**
     * getSteamTransaction - Get Steam Transaction
     * 
     * Get a single Steam transactions by ID. This returns the exact same information as `getSteamTransactions`, so no point in using this endpoint.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSteamTransaction.Responses.$200>
  }
  ['/Admin/transactions/{transactionId}']: {
  }
  ['/auth/user/subscription']: {
    /**
     * getCurrentSubscriptions - Get Current Subscriptions
     * 
     * Get a list of all current user subscriptions.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCurrentSubscriptions.Responses.$200>
  }
  ['/subscriptions']: {
    /**
     * getSubscriptions - List Subscriptions
     * 
     * List all existing Subscriptions. For example, "vrchatplus-monthly" and "vrchatplus-yearly".
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSubscriptions.Responses.$200>
  }
  ['/licenseGroups/{licenseGroupId}']: {
    /**
     * getLicenseGroup - Get License Group
     * 
     * Get a single License Group by given ID.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetLicenseGroup.Responses.$200>
  }
  ['/favorites']: {
    /**
     * getFavorites - List Favorites
     * 
     * Returns a list of favorites.
     */
    'get'(
      parameters?: Parameters<Paths.GetFavorites.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFavorites.Responses.$200>
    /**
     * addFavorite - Add Favorite
     * 
     * Add a new favorite.
     * 
     * Friend groups are named `group_0` through `group_3`. Avatar and World groups are named `avatars1` to `avatars4` and `worlds1` to `worlds4`.
     * 
     * You cannot add people whom you are not friends with to your friends list. Destroying a friendship removes the person as favorite on both sides.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AddFavorite.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AddFavorite.Responses.$200>
  }
  ['/favorites/{favoriteId}']: {
    /**
     * getFavorite - Show Favorite
     * 
     * Return information about a specific Favorite.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFavorite.Responses.$200>
    /**
     * removeFavorite - Remove Favorite
     * 
     * Remove a favorite from your favorites list.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.RemoveFavorite.Responses.$200>
  }
  ['/favorite/groups']: {
    /**
     * getFavoriteGroups - List Favorite Groups
     * 
     * Return a list of favorite groups owned by a user. Returns the same information as `getFavoriteGroups`.
     */
    'get'(
      parameters?: Parameters<Paths.GetFavoriteGroups.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFavoriteGroups.Responses.$200>
  }
  ['/favorite/group/{favoriteGroupType}/{favoriteGroupName}/{userId}']: {
    /**
     * getFavoriteGroup - Show Favorite Group
     * 
     * Fetch information about a specific favorite group.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFavoriteGroup.Responses.$200>
    /**
     * updateFavoriteGroup - Update Favorite Group
     * 
     * Update information about a specific favorite group.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateFavoriteGroup.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateFavoriteGroup.Responses.$200>
    /**
     * clearFavoriteGroup - Clear Favorite Group
     * 
     * Clear ALL contents of a specific favorite group.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ClearFavoriteGroup.Responses.$200>
  }
  ['/files']: {
    /**
     * getFiles - List Files
     * 
     * Returns a list of files
     */
    'get'(
      parameters?: Parameters<Paths.GetFiles.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFiles.Responses.$200>
  }
  ['/file']: {
    /**
     * createFile - Create File
     * 
     * Creates a new File object
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateFile.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateFile.Responses.$200>
  }
  ['/file/{fileId}']: {
    /**
     * getFile - Show File
     * 
     * Shows general information about the "File" object. Each File can have several "Version"'s, and each Version can have multiple real files or "Data" blobs.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFile.Responses.$200>
    /**
     * deleteFile - Delete File
     * 
     * Deletes a File object.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteFile.Responses.$200>
    /**
     * createFileVersion - Create File Version
     * 
     * Creates a new FileVersion. Once a Version has been created, proceed to the `/file/{fileId}/{versionId}/file/start` endpoint to start a file upload.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateFileVersion.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateFileVersion.Responses.$200>
  }
  ['/file/{fileId}/{versionId}']: {
    /**
     * downloadFileVersion - Download File Version
     * 
     * Downloads the file with the provided version number.
     * 
     * **Version Note:** Version 0 is always when the file was created. The real data is usually always located in version 1 and up.
     * 
     * **Extension Note:** Files are not guaranteed to have a file extensions. UnityPackage files tends to have it, images through this endpoint do not. You are responsible for appending file extension from the `extension` field when neccesary.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DownloadFileVersion.Responses.$200>
    /**
     * deleteFileVersion - Delete File Version
     * 
     * Delete a specific version of a file. You can only delete the latest version.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteFileVersion.Responses.$200>
  }
  ['/file/{fileId}/{versionId}/{fileType}/finish']: {
    /**
     * finishFileDataUpload - Finish FileData Upload
     * 
     * Finish an upload of a FileData. This will mark it as "complete". After uploading the `file` for Avatars and Worlds you then have to upload a `signature` file.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.FinishFileDataUpload.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.FinishFileDataUpload.Responses.$200>
  }
  ['/file/{fileId}/{versionId}/{fileType}/start']: {
    /**
     * startFileDataUpload - Start FileData Upload
     * 
     * Starts an upload of a specific FilePart. This endpoint will return an AWS URL which you can PUT data to. You need to call this and receive a new AWS API URL for each `partNumber`. Please see AWS's REST documentation on "PUT Object to S3" on how to upload. Once all parts has been uploaded, proceed to `/finish` endpoint.
     * 
     * **Note:** `nextPartNumber` seems like it is always ignored. Despite it returning 0, first partNumber is always 1.
     */
    'put'(
      parameters?: Parameters<Paths.StartFileDataUpload.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.StartFileDataUpload.Responses.$200>
  }
  ['/file/{fileId}/{versionId}/{fileType}/status']: {
    /**
     * getFileDataUploadStatus - Check FileData Upload Status
     * 
     * Retrieves the upload status for file upload. Can currently only be accessed when `status` is `waiting`. Trying to access it on a file version already uploaded currently times out.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFileDataUploadStatus.Responses.$200>
  }
  ['/auth/user/friends']: {
    /**
     * getFriends - List Friends
     * 
     * List information about friends.
     */
    'get'(
      parameters?: Parameters<Paths.GetFriends.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFriends.Responses.$200>
  }
  ['/user/{userId}/friendRequest']: {
    /**
     * friend - Send Friend Request
     * 
     * Send a friend request to another user.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.Friend.Responses.$200>
    /**
     * deleteFriendRequest - Delete Friend Request
     * 
     * Deletes an outgoing pending friend request to another user. To delete an incoming friend request, use the `deleteNotification` endpoint instead.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteFriendRequest.Responses.$200>
  }
  ['/user/{userId}/friendStatus']: {
    /**
     * getFriendStatus - Check Friend Status
     * 
     * Retrieve if the user is currently a friend with a given user, if they have an outgoing friend request, and if they have an incoming friend request. The proper way to receive and accept friend request is by checking if the user has an incoming `Notification` of type `friendRequest`, and then accepting that notification.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFriendStatus.Responses.$200>
  }
  ['/auth/user/friends/{userId}']: {
    /**
     * unfriend - Unfriend
     * 
     * Unfriend a user by ID.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.Unfriend.Responses.$200>
  }
  ['/groups']: {
    /**
     * searchGroups - Search Group
     * 
     * Searches Groups by name or shortCode
     */
    'get'(
      parameters?: Parameters<Paths.SearchGroups.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SearchGroups.Responses.$200>
    /**
     * createGroup - Create Group
     * 
     * Creates a Group and returns a Group object. **Requires VRC+ Subscription.**
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateGroup.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateGroup.Responses.$200>
  }
  ['/groups/{groupId}']: {
    /**
     * getGroup - Get Group by ID
     * 
     * Returns a single Group by ID.
     */
    'get'(
      parameters?: Parameters<Paths.GetGroup.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetGroup.Responses.$200>
    /**
     * updateGroup - Update Group
     * 
     * Updates a Group and returns it.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateGroup.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateGroup.Responses.$200>
    /**
     * deleteGroup - Delete Group
     * 
     * Deletes a Group.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteGroup.Responses.$200>
  }
  ['/groups/{groupId}/instances']: {
    /**
     * getGroupInstances - Get Group Instances
     * 
     * Returns an array of Instances
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetGroupInstances.Responses.$200>
  }
  ['/groups/{groupId}/announcement']: {
    /**
     * getGroupAnnouncements - Get Group Announcement
     * 
     * Returns the announcement for a Group.
     * If no announcement has been made, then it returns **empty object**. 
     * If an announcement exists, then it will always return all fields except `imageId` and `imageUrl` which may be null.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetGroupAnnouncements.Responses.$200>
    /**
     * createGroupAnnouncement - Create Group Announcement
     * 
     * Creates an Announcement for a Group.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateGroupAnnouncement.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateGroupAnnouncement.Responses.$200>
    /**
     * deleteGroupAnnouncement - Delete Group Announcement
     * 
     * Deletes the announcement for a Group.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteGroupAnnouncement.Responses.$200>
  }
  ['/groups/{groupId}/auditLogs']: {
    /**
     * getGroupAuditLogs - Get Group Audit Logs
     * 
     * Returns a list of audit logs for a Group.
     */
    'get'(
      parameters?: Parameters<Paths.GetGroupAuditLogs.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetGroupAuditLogs.Responses.$200>
  }
  ['/groups/{groupId}/bans']: {
    /**
     * getGroupBans - Get Group Bans
     * 
     * Returns a list of banned users for a Group.
     */
    'get'(
      parameters?: Parameters<Paths.GetGroupBans.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetGroupBans.Responses.$200>
    /**
     * banGroupMember - Ban Group Member
     * 
     * Bans a user from a Group.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.BanGroupMember.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.BanGroupMember.Responses.$200>
  }
  ['/groups/{groupId}/bans/{userId}']: {
    /**
     * unbanGroupMember - Unban Group Member
     * 
     * Unbans a user from a Group.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UnbanGroupMember.Responses.$200>
  }
  ['/groups/{groupId}/galleries']: {
    /**
     * createGroupGallery - Create Group Gallery
     * 
     * Creates a gallery for a Group.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateGroupGallery.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateGroupGallery.Responses.$200>
  }
  ['/groups/{groupId}/galleries/{groupGalleryId}']: {
    /**
     * getGroupGalleryImages - Get Group Gallery Images
     * 
     * Returns a list of images for a Group gallery.
     */
    'get'(
      parameters?: Parameters<Paths.GetGroupGalleryImages.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetGroupGalleryImages.Responses.$200>
    /**
     * updateGroupGallery - Update Group Gallery
     * 
     * Updates a gallery for a Group.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateGroupGallery.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateGroupGallery.Responses.$200>
    /**
     * deleteGroupGallery - Delete Group Gallery
     * 
     * Deletes a gallery for a Group.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteGroupGallery.Responses.$200>
  }
  ['/groups/{groupId}/galleries/{groupGalleryId}/images']: {
    /**
     * addGroupGalleryImage - Add Group Gallery Image
     * 
     * Adds an image to a Group gallery.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AddGroupGalleryImage.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AddGroupGalleryImage.Responses.$200>
  }
  ['/groups/{groupId}/galleries/{groupGalleryId}/images/{groupGalleryImageId}']: {
    /**
     * deleteGroupGalleryImage - Delete Group Gallery Image
     * 
     * Deletes an image from a Group gallery.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteGroupGalleryImage.Responses.$200>
  }
  ['/groups/{groupId}/invites']: {
    /**
     * getGroupInvites - Get Group Invites Sent
     * 
     * Returns a list of members that have been invited to the Group.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetGroupInvites.Responses.$200>
    /**
     * createGroupInvite - Invite User to Group
     * 
     * Sends an invite to a user to join the group.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateGroupInvite.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateGroupInvite.Responses.$200>
  }
  ['/groups/{groupId}/invites/{userId}']: {
    /**
     * deleteGroupInvite - Delete User Invite
     * 
     * Deletes an Group invite sent to a User
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteGroupInvite.Responses.$200>
  }
  ['/groups/{groupId}/join']: {
    /**
     * joinGroup - Join Group
     * 
     * Join a Group by ID and returns the member object.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.JoinGroup.Responses.$200>
  }
  ['/groups/{groupId}/leave']: {
    /**
     * leaveGroup - Leave Group
     * 
     * Leave a group by ID.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.LeaveGroup.Responses.$200>
  }
  ['/groups/{groupId}/members']: {
    /**
     * getGroupMembers - List Group Members
     * 
     * Returns a List of all **other** Group Members. This endpoint will never return the user calling the endpoint.
     * Information about the user calling the endpoint must be found in the `myMember` field of the Group object.
     */
    'get'(
      parameters?: Parameters<Paths.GetGroupMembers.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetGroupMembers.Responses.$200>
  }
  ['/groups/{groupId}/members/{userId}']: {
    /**
     * getGroupMember - Get Group Member
     * 
     * Returns a LimitedGroup Member.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetGroupMember.Responses.$200>
    /**
     * updateGroupMember - Update Group Member
     * 
     * Updates a Group Member
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateGroupMember.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateGroupMember.Responses.$200>
    /**
     * kickGroupMember - Kick Group Member
     * 
     * Kicks a Group Member from the Group. The current user must have the "Remove Group Members" permission.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.KickGroupMember.Responses.$200>
  }
  ['/groups/{groupId}/members/{userId}/roles/{groupRoleId}']: {
    /**
     * addGroupMemberRole - Add Role to GroupMember
     * 
     * Adds a Role to a Group Member
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AddGroupMemberRole.Responses.$200>
    /**
     * removeGroupMemberRole - Remove Role from GroupMember
     * 
     * Removes a Role from a Group Member
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.RemoveGroupMemberRole.Responses.$200>
  }
  ['/groups/{groupId}/permissions']: {
    /**
     * getGroupPermissions - List Group Permissions
     * 
     * Returns a List of all possible/available permissions for a Group.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetGroupPermissions.Responses.$200>
  }
  ['/groups/{groupId}/requests']: {
    /**
     * getGroupRequests - Get Group Join Requests
     * 
     * Returns a list of members that have requested to join the Group.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetGroupRequests.Responses.$200>
    /**
     * cancelGroupRequest - Cancel Group Join Request
     * 
     * Cancels a request sent to join the group.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CancelGroupRequest.Responses.$200>
  }
  ['/groups/{groupId}/requests/{userId}']: {
    /**
     * respondGroupJoinRequest - Respond Group Join request
     * 
     * Responds to a Group Join Request with Accept/Deny
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.RespondGroupJoinRequest.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.RespondGroupJoinRequest.Responses.$200>
  }
  ['/groups/{groupId}/roles']: {
    /**
     * getGroupRoles - Get Group Roles
     * 
     * Returns a Group Role by ID.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetGroupRoles.Responses.$200>
    /**
     * createGroupRole - Create GroupRole
     * 
     * Create a Group role.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateGroupRole.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateGroupRole.Responses.$200>
  }
  ['/groups/{groupId}/roles/{groupRoleId}']: {
    /**
     * updateGroupRole - Update Group Role
     * 
     * Updates a group role by ID.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateGroupRole.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateGroupRole.Responses.$200>
    /**
     * deleteGroupRole - Delete Group Role
     * 
     * Deletes a Group Role by ID and returns the remaining roles.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteGroupRole.Responses.$200>
  }
  ['/invite/{userId}']: {
    /**
     * inviteUser - Invite User
     * 
     * Sends an invite to a user. Returns the Notification of type `invite` that was sent.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.InviteUser.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.InviteUser.Responses.$200>
  }
  ['/invite/myself/to/{worldId}:{instanceId}']: {
    /**
     * inviteMyselfTo - Invite Myself To Instance
     * 
     * Sends self an invite to an instance
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.InviteMyselfTo.Responses.$200>
  }
  ['/requestInvite/{userId}']: {
    /**
     * requestInvite - Request Invite
     * 
     * Requests an invite from a user. Returns the Notification of type `requestInvite` that was sent.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.RequestInvite.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.RequestInvite.Responses.$200>
  }
  ['/invite/{notificationId}/response']: {
    /**
     * respondInvite - Respond Invite
     * 
     * Respond to an invite request by sending a world invite to the requesting user. `:notificationId` is the ID of the requesting notification.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.RespondInvite.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.RespondInvite.Responses.$200>
  }
  ['/message/{userId}/{messageType}']: {
    /**
     * getInviteMessages - List Invite Messages
     * 
     * Returns a list of all the users Invite Messages. Admin Credentials are required to view messages of other users!
     * 
     * Message type refers to a different collection of messages, used during different types of responses.
     * 
     * * `message` = Message during a normal invite
     * * `response` = Message when replying to a message
     * * `request` = Message when requesting an invite
     * * `requestResponse` = Message when replying to a request for invite
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetInviteMessages.Responses.$200>
  }
  ['/message/{userId}/{messageType}/{slot}']: {
    /**
     * getInviteMessage - Get Invite Message
     * 
     * Returns a single Invite Message. This returns the exact same information but less than `getInviteMessages`. Admin Credentials are required to view messages of other users!
     * 
     * Message type refers to a different collection of messages, used during different types of responses.
     * 
     * * `message` = Message during a normal invite
     * * `response` = Message when replying to a message
     * * `request` = Message when requesting an invite
     * * `requestResponse` = Message when replying to a request for invite
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetInviteMessage.Responses.$200>
    /**
     * updateInviteMessage - Update Invite Message
     * 
     * Updates a single Invite Message and then returns a list of all of them. Admin Credentials are required to update messages of other users!
     * 
     * Updating a message automatically sets the cooldown timer to 60 minutes.
     * Trying to edit a message before the cooldown timer expires results in a 429 "Too Fast Error".
     * 
     * Message type refers to a different collection of messages, used during different types of responses.
     * 
     * * `message` = Message during a normal invite
     * * `response` = Message when replying to a message
     * * `request` = Message when requesting an invite
     * * `requestResponse` = Message when replying to a request for invite
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateInviteMessage.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateInviteMessage.Responses.$200>
    /**
     * resetInviteMessage - Reset Invite Message
     * 
     * Resets a single Invite Message back to its original message, and then returns a list of all of them. Admin Credentials are required to update messages of other users!
     * 
     * Resetting a message respects the rate-limit, so it is not possible to reset within the 60 minutes countdown.
     * Resetting it does however not set the rate-limit to 60 like when editing it.
     * It is possible to edit it right after resetting it.
     * Trying to edit a message before the cooldown timer expires results in a 429 "Too Fast Error".
     * 
     * Message type refers to a different collection of messages, used during different types of responses.
     * 
     * * `message` = Message during a normal invite
     * * `response` = Message when replying to a message
     * * `request` = Message when requesting an invite
     * * `requestResponse` = Message when replying to a request for invite
     * 
     * The DELETE endpoint does not have/require any request body.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ResetInviteMessage.Responses.$200>
  }
  ['/instances/{worldId}:{instanceId}']: {
    /**
     * getInstance - Get Instance
     * 
     * Returns an instance. Please read [Instances Tutorial](https://vrchatapi.github.io/tutorials/instances/) for more information on Instances.
     * 
     * If an invalid instanceId is provided, this endpoint will simply return "null"!
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetInstance.Responses.$200>
  }
  ['/instances/{worldId}:{instanceId}/shortName']: {
    /**
     * getShortName - Get Instance Short Name
     * 
     * Returns an instance short name.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetShortName.Responses.$200>
  }
  ['/instances/{worldId}:{instanceId}/invite']: {
    /**
     * sendSelfInvite - Send Self Invite
     * 
     * Sends an invite to the instance to yourself.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SendSelfInvite.Responses.$200>
  }
  ['/instances/s/{shortName}']: {
    /**
     * getInstanceByShortName - Get Instance By Short Name
     * 
     * Returns an instance. Please read [Instances Tutorial](https://vrchatapi.github.io/tutorials/instances/) for more information on Instances.
     */
    'get'(
      parameters?: Parameters<Paths.InstancesS$ShortName.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetInstanceByShortName.Responses.$200>
  }
  ['/auth/user/notifications']: {
    /**
     * getNotifications - List Notifications
     * 
     * Retrieve all of the current user's notifications.
     */
    'get'(
      parameters?: Parameters<Paths.GetNotifications.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetNotifications.Responses.$200>
  }
  ['/auth/user/notifications/{notificationId}/accept']: {
    /**
     * acceptFriendRequest - Accept Friend Request
     * 
     * Accept a friend request by notification `frq_` ID. Friend requests can be found using the NotificationsAPI `getNotifications` by filtering of type `friendRequest`.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AcceptFriendRequest.Responses.$200>
  }
  ['/auth/user/notifications/{notificationId}/see']: {
    /**
     * markNotificationAsRead - Mark Notification As Read
     * 
     * Mark a notification as seen.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.MarkNotificationAsRead.Responses.$200>
  }
  ['/auth/user/notifications/{notificationId}/hide']: {
    /**
     * deleteNotification - Delete Notification
     * 
     * Delete a notification.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteNotification.Responses.$200>
  }
  ['/auth/user/notifications/clear']: {
    /**
     * clearNotifications - Clear All Notifications
     * 
     * Clear **all** notifications.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ClearNotifications.Responses.$200>
  }
  ['/auth/permissions']: {
    /**
     * getAssignedPermissions - Get Assigned Permissions
     * 
     * Returns a list of all permissions currently granted by the user. Permissions are assigned e.g. by subscribing to VRC+.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAssignedPermissions.Responses.$200>
  }
  ['/permissions/{permissionId}']: {
    /**
     * getPermission - Get Permission
     * 
     * Returns a single permission. This endpoint is pretty useless, as it returns the exact same information as `/auth/permissions`.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPermission.Responses.$200>
  }
  ['/auth/user/playermoderations']: {
    /**
     * getPlayerModerations - Search Player Moderations
     * 
     * Returns a list of all player moderations made by **you**.
     * 
     * This endpoint does not have pagination, and will return *all* results. Use query parameters to limit your query if needed.
     */
    'get'(
      parameters?: Parameters<Paths.GetPlayerModerations.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPlayerModerations.Responses.$200>
    /**
     * moderateUser - Moderate User
     * 
     * Moderate a user, e.g. unmute them or show their avatar.
     * 
     * Please see the [Player Moderation docs](https://vrchatapi.github.io/docs/api/#tag--playermoderation) on what playerModerations are, and how they differ from staff moderations.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ModerateUser.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ModerateUser.Responses.$200>
    /**
     * clearAllPlayerModerations - Clear All Player Moderations
     * 
     * ⚠️ **This will delete every single player moderation you've ever made.**
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ClearAllPlayerModerations.Responses.$200>
  }
  ['/auth/user/playermoderations/{playerModerationId}']: {
    /**
     * getPlayerModeration - Get Player Moderation
     * 
     * Returns a single Player Moderation. This returns the exact same amount of information as the more generalised `getPlayerModerations`.
     */
    'get'(
      parameters?: Parameters<Paths.AuthUserPlayermoderations$PlayerModerationId.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPlayerModeration.Responses.$200>
    /**
     * deletePlayerModeration - Delete Player Moderation
     * 
     * Deletes a specific player moderation based on it's `pmod_` ID. The website uses `unmoderateUser` instead. You can delete the same player moderation multiple times successfully.
     */
    'delete'(
      parameters?: Parameters<Paths.AuthUserPlayermoderations$PlayerModerationId.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeletePlayerModeration.Responses.$200>
  }
  ['/auth/user/unplayermoderate']: {
    /**
     * unmoderateUser - Unmoderate User
     * 
     * Removes a player moderation previously added through `moderateUser`. E.g if you previously have shown their avatar, but now want to reset it to default.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UnmoderateUser.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UnmoderateUser.Responses.$200>
  }
  ['/config']: {
    /**
     * getConfig - Fetch API Config
     * 
     * API config contains configuration that the clients needs to work properly.
     * 
     * Currently the most important value here is `clientApiKey` which is used for all other API endpoints.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetConfig.Responses.$200>
  }
  ['/infoPush']: {
    /**
     * getInfoPush - Show Information Notices
     * 
     * IPS (Info Push System) is a system for VRChat to push out dynamic information to the client. This is primarily used by the Quick-Menu info banners, but can also be used to e.g. alert you to update your game to the latest version.
     * 
     * `include` is used to query what Information Pushes should be included in the response. If include is missing or empty, then no notices will normally be returned. This is an "any of" search.
     * 
     * `require` is used to limit what Information Pushes should be included in the response. This is usually used in combination with `include`, and is an "all of" search.
     */
    'get'(
      parameters?: Parameters<Paths.GetInfoPush.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetInfoPush.Responses.$200>
  }
  ['/css/app.css']: {
    /**
     * getCSS - Download CSS
     * 
     * Fetches the CSS code to the frontend React website.
     */
    'get'(
      parameters?: Parameters<Paths.GetCSS.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCSS.Responses.$200>
  }
  ['/js/app.js']: {
    /**
     * getJavaScript - Download JavaScript
     * 
     * Fetches the JavaScript code to the frontend React website.
     */
    'get'(
      parameters?: Parameters<Paths.GetJavaScript.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/health']: {
    /**
     * getHealth - Check API Health
     * 
     * ~~Gets the overall health status, the server name, and the current build version tag of the API.~~
     * 
     * **DEPRECATED:** VRChat has suddenly restricted this endpoint for unknown reasons, and now always return 401 Unauthorized.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetHealth.Responses.$200>
  }
  ['/visits']: {
    /**
     * getCurrentOnlineUsers - Current Online Users
     * 
     * Returns the current number of online users.
     * 
     * **NOTE:** The response type is not a JSON object, but a simple JSON integer.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCurrentOnlineUsers.Responses.$200>
  }
  ['/time']: {
    /**
     * getSystemTime - Current System Time
     * 
     * Returns the current time of the API server.
     * 
     * **NOTE:** The response type is not a JSON object, but a simple JSON string.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSystemTime.Responses.$200>
  }
  ['/users']: {
    /**
     * searchUsers - Search All Users
     * 
     * Search and list any users by text query
     */
    'get'(
      parameters?: Parameters<Paths.SearchUsers.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SearchUsers.Responses.$200>
  }
  ['/users/{username}/name']: {
    /**
     * getUserByName - Get User by Username
     * 
     * ~~Get public user information about a specific user using their name.~~
     * 
     * **DEPRECATED:** VRChat API no longer return usernames of other users. [See issue by Tupper for more information](https://github.com/pypy-vrc/VRCX/issues/429).
     * This endpoint now require Admin Credentials.
     */
    'get'(
      parameters?: Parameters<Paths.Users$UsernameName.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetUserByName.Responses.$200>
  }
  ['/users/{userId}']: {
    /**
     * getUser - Get User by ID
     * 
     * Get public user information about a specific user using their ID.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetUser.Responses.$200>
    /**
     * updateUser - Update User Info
     * 
     * Update a users information such as the email and birthday.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateUser.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateUser.Responses.$200>
  }
  ['/users/{userId}/groups']: {
    /**
     * getUserGroups - Get User Groups
     * 
     * Get user's public groups
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetUserGroups.Responses.$200>
  }
  ['/users/{userId}/groups/requested']: {
    /**
     * getUserGroupRequests - Get User Group Requests
     * 
     * Returns a list of Groups the user has requested to be invited into.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetUserGroupRequests.Responses.$200>
  }
  ['/worlds']: {
    /**
     * searchWorlds - Search All Worlds
     * 
     * Search and list any worlds by query filters.
     */
    'get'(
      parameters?: Parameters<Paths.SearchWorlds.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SearchWorlds.Responses.$200>
    /**
     * createWorld - Create World
     * 
     * Create a new world. This endpoint requires `assetUrl` to be a valid File object with `.vrcw` file extension, and `imageUrl` to be a valid File object with an image file extension.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateWorld.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateWorld.Responses.$200>
  }
  ['/worlds/active']: {
    /**
     * getActiveWorlds - List Active Worlds
     * 
     * Search and list currently Active worlds by query filters.
     */
    'get'(
      parameters?: Parameters<Paths.GetActiveWorlds.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetActiveWorlds.Responses.$200>
  }
  ['/worlds/favorites']: {
    /**
     * getFavoritedWorlds - List Favorited Worlds
     * 
     * Search and list favorited worlds by query filters.
     */
    'get'(
      parameters?: Parameters<Paths.GetFavoritedWorlds.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFavoritedWorlds.Responses.$200>
  }
  ['/worlds/recent']: {
    /**
     * getRecentWorlds - List Recent Worlds
     * 
     * Search and list recently visited worlds by query filters.
     */
    'get'(
      parameters?: Parameters<Paths.GetRecentWorlds.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetRecentWorlds.Responses.$200>
  }
  ['/worlds/{worldId}']: {
    /**
     * getWorld - Get World by ID
     * 
     * Get information about a specific World.
     * Works unauthenticated but when so will always return `0` for certain fields.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetWorld.Responses.$200>
    /**
     * updateWorld - Update World
     * 
     * Update information about a specific World.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateWorld.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateWorld.Responses.$200>
    /**
     * deleteWorld - Delete World
     * 
     * Delete a world. Notice a world is never fully "deleted", only its ReleaseStatus is set to "hidden" and the linked Files are deleted. The WorldID is permanently reserved.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteWorld.Responses.$200>
  }
  ['/worlds/{worldId}/metadata']: {
    /**
     * getWorldMetadata - Get World Metadata
     * 
     * Return a worlds custom metadata. This is currently believed to be unused. Metadata can be set with `updateWorld` and can be any arbitrary object.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetWorldMetadata.Responses.$200>
  }
  ['/worlds/{worldId}/publish']: {
    /**
     * getWorldPublishStatus - Get World Publish Status
     * 
     * Returns a worlds publish status.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetWorldPublishStatus.Responses.$200>
    /**
     * publishWorld - Publish World
     * 
     * Publish a world. You can only publish one world per week.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PublishWorld.Responses.$200>
    /**
     * unpublishWorld - Unpublish World
     * 
     * Unpublish a world.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UnpublishWorld.Responses.$200>
  }
  ['/worlds/{worldId}/{instanceId}']: {
    /**
     * getWorldInstance - Get World Instance
     * 
     * Returns a worlds instance.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetWorldInstance.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
