/**
 * soccr.io API
 * An ASP.NET Core Web API for managing Soccer items
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OperatingSystem } from './operatingSystem';
import { SiteSettings } from './siteSettings';
import { BasicsRepositorySettings } from './basicsRepositorySettings';
import { Version } from './version';
import { RepositorySettings } from './repositorySettings';


export interface EnvironmentDetails { 
    EnvironmentName?: string | null;
    EnvFoundFrom?: string | null;
    BasicsFileName?: string | null;
    BasicsFilePath?: string | null;
    BasicsFileLoaded?: boolean | null;
    ApplicationName?: string | null;
    IsProduction?: boolean | null;
    BasicConn?: string | null;
    IsWindows?: boolean | null;
    Is64BitOS?: boolean | null;
    Is64BitProcess?: boolean | null;
    ContentRootPath?: string | null;
    OS?: OperatingSystem;
    OSVersion?: string | null;
    ProcessPath?: string | null;
    RuntimeVersion?: Version;
    BasicRepositorySettings?: BasicsRepositorySettings;
    DefaultRepositorySettings?: RepositorySettings;
    SiteSettings?: SiteSettings;
}

