import { IUserModel, ISettings } from '../common/CommonTypes';

export interface ISessionOptions {
    logging: boolean;
}

export interface IUserSession {
    sessionId?: string;
    scenes?: {
        activeSceneId: string;
    };
    settings?: Partial<ISettings>;
    tempSettings?: Partial<ISettings>;
}
export interface IStorageShape {
    [chatId: string]: IUserSession;
}
