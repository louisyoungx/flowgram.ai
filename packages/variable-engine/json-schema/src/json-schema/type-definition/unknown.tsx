/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import { IJsonSchema, JsonSchemaTypeRegistryCreator } from '../types';

export const unknownRegistryCreator: JsonSchemaTypeRegistryCreator = () => ({
  type: 'unknown',
  label: 'Unknown',
  parentType: [],

  icon: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      focusable="false"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.22183 4.22182C6.21136 2.23232 8.96273 1 12 1C15.0373 1 17.7886 2.23231 19.7782 4.22182L19.0711 4.92893L19.7782 4.22183C21.7677 6.21136 23 8.96273 23 12C23 15.0373 21.7677 17.7886 19.7782 19.7782C17.7886 21.7677 15.0373 23 12 23C8.96273 23 6.21136 21.7677 4.22183 19.7782L4.92893 19.0711L4.22182 19.7782C2.23231 17.7886 1 15.0373 1 12C1 8.96273 2.23232 6.21136 4.22182 4.22183L4.22183 4.22182ZM12 3C9.51447 3 7.26584 4.00626 5.63603 5.63604C4.00625 7.26585 3 9.51447 3 12C3 14.4855 4.00627 16.7342 5.63604 18.3639C7.26584 19.9937 9.51447 21 12 21C14.4855 21 16.7342 19.9937 18.3639 18.3639C19.9937 16.7342 21 14.4855 21 12C21 9.51447 19.9937 7.26584 18.3639 5.63604C16.7342 4.00627 14.4855 3 12 3Z"
        fill="currentColor"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 9.31245C8 7.10331 9.79086 5.31245 12 5.31245C14.2091 5.31245 16 7.10331 16 9.31245C16 11.1763 14.7252 12.7424 13 13.1864V14.3124C13 14.8647 12.5523 15.3124 12 15.3124C11.4477 15.3124 11 14.8647 11 14.3124V12.3124C11 11.7602 11.4477 11.3124 12 11.3124C13.1046 11.3124 14 10.417 14 9.31245C14 8.20788 13.1046 7.31245 12 7.31245C10.8954 7.31245 10 8.20788 10 9.31245C10 9.86473 9.55228 10.3124 9 10.3124C8.44772 10.3124 8 9.86473 8 9.31245Z"
        fill="currentColor"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 18.8125C12.6904 18.8125 13.25 18.2528 13.25 17.5625C13.25 16.8721 12.6904 16.3125 12 16.3125C11.3097 16.3125 10.75 16.8721 10.75 17.5625C10.75 18.2528 11.3097 18.8125 12 18.8125Z"
        fill="currentColor"
      ></path>
    </svg>
  ),

  getDefaultSchema: (): IJsonSchema => ({ type: 'unknown' } as unknown as IJsonSchema),

  getDefaultValue: () => undefined,
});
