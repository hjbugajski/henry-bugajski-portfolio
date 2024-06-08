/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FieldLinkArray".
 */
export type FieldLinkArray =
  | {
      text: string;
      type: 'internal' | 'external';
      page?: (string | null) | Page;
      url?: string | null;
      rel?: ('noopener' | 'noreferrer' | 'nofollow')[] | null;
      newTab?: boolean | null;
      umamiEvent?: string | null;
      umamiEventId?: string | null;
      id?: string | null;
    }[]
  | null;

export interface Config {
  collections: {
    pages: Page;
    users: User;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    navigation: Navigation;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  description: string;
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  roles: ('admin' | 'public')[];
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "navigation".
 */
export interface Navigation {
  id: string;
  links?: FieldLinkArray;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FieldLinkGroup".
 */
export interface FieldLinkGroup {
  text: string;
  type: 'internal' | 'external';
  page?: (string | null) | Page;
  url?: string | null;
  rel?: ('noopener' | 'noreferrer' | 'nofollow')[] | null;
  newTab?: boolean | null;
  umamiEvent?: string | null;
  umamiEventId?: string | null;
  id?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BlockItem".
 */
export interface BlockItem {
  size: 'default' | 'large';
  heading: string;
  hasLink?: boolean | null;
  link?: FieldLinkGroup;
  hasBadge?: boolean | null;
  badge?: {
    text: string;
    color: 'gray' | 'blue' | 'red' | 'amber' | 'green' | 'teal' | 'purple' | 'pink';
  };
  tags: {
    icon: 'arrowUpRightSmall' | 'briefcase' | 'clock' | 'code' | 'globe' | 'servers';
    type: 'text' | 'date' | 'dateRange';
    text?: string[] | null;
    date?: string | null;
    dateRange?: {
      startDate: string;
      endDate: string;
    };
    id?: string | null;
  }[];
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'item';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BlockSection".
 */
export interface BlockSection {
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'section';
}

declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}