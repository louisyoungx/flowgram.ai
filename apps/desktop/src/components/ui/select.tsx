/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { Fragment, useContext, type ButtonHTMLAttributes } from 'react';

import { Check, ChevronDown, ChevronUp, MoreHorizontal } from 'lucide-react';
import * as SelectPrimitive from '@radix-ui/react-select';

import { cn } from '../../lib/utils';
import { Popover } from './popover';
import { MenuButton } from './menu-button';
import { FloatingLayerOwners } from './floating-layer';
import { Button } from './button';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  lang?: string;
  separatorBefore?: boolean;
}
export interface SelectProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'value' | 'onChange' | 'defaultValue' | 'children'
  > {
  value: string;
  options: readonly SelectOption[];
  onValueChange: (value: string) => void;
  name?: string;
  placeholder?: string;
  variant?: 'default' | 'ghost';
}

// Radix reserves an empty item value. Encode every value so an explicit empty
// option is selectable without inventing a reserved value in workflow data.
const itemValue = (value: string) => `option:${value}`;
export function Select({
  value,
  options,
  onValueChange,
  name,
  placeholder = '',
  disabled,
  className,
  variant = 'default',
  ...triggerProps
}: SelectProps) {
  const owners = useContext(FloatingLayerOwners);
  const selected = options.find((option) => option.value === value);
  return (
    <>
      <SelectPrimitive.Root
        value={itemValue(value)}
        onValueChange={(next) => onValueChange(next.slice('option:'.length))}
        disabled={disabled || !options.length}
      >
        <SelectPrimitive.Trigger
          {...triggerProps}
          className={cn('fg-select-trigger', variant === 'ghost' && 'fg-select-ghost', className)}
        >
          <SelectPrimitive.Value placeholder={placeholder}>
            <span className="fg-select-value" lang={selected?.lang}>
              {selected?.label ?? (value || placeholder)}
            </span>
          </SelectPrimitive.Value>
          <SelectPrimitive.Icon asChild>
            <ChevronDown className="fg-select-chevron" size={14} />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            className="fg-select-content"
            data-floating-layer-owners={owners.join(' ')}
            position="popper"
            sideOffset={5}
            collisionPadding={10}
          >
            <SelectPrimitive.ScrollUpButton className="fg-select-scroll">
              <ChevronUp size={14} />
            </SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.Viewport className="fg-select-viewport">
              {options.map((option) => (
                <Fragment key={option.value}>
                  {option.separatorBefore && (
                    <SelectPrimitive.Separator className="my-1 h-px bg-border" />
                  )}
                  <SelectPrimitive.Item
                    key={option.value}
                    value={itemValue(option.value)}
                    disabled={option.disabled}
                    textValue={option.label}
                    className="fg-select-option"
                    lang={option.lang}
                  >
                    <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                    <SelectPrimitive.ItemIndicator className="fg-select-check">
                      <Check size={14} />
                    </SelectPrimitive.ItemIndicator>
                  </SelectPrimitive.Item>
                </Fragment>
              ))}
            </SelectPrimitive.Viewport>
            <SelectPrimitive.ScrollDownButton className="fg-select-scroll">
              <ChevronDown size={14} />
            </SelectPrimitive.ScrollDownButton>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
      {name && <input type="hidden" name={name} value={value} />}
    </>
  );
}

/** Composite entity picker: selection and row actions are sibling buttons, never nested options. */
export function EntitySelect({
  value,
  items,
  label,
  placeholder,
  onValueChange,
  actions,
  onAction,
  actionLabel,
  commands,
  onCommand,
  className,
}: {
  value: string;
  items: readonly { value: string; label: string }[];
  label: string;
  placeholder: string;
  onValueChange: (value: string) => void;
  actions: readonly import('./command-menu').MenuCommand[];
  onAction: (action: string, value: string) => void;
  actionLabel: (item: { value: string; label: string }) => string;
  commands: readonly import('./command-menu').MenuCommand[];
  onCommand: (action: string) => void;
  className?: string;
}) {
  const current = items.find((item) => item.value === value);
  return (
    <div className={cn('fg-entity-select', className)}>
      <Popover
        label={label}
        width={320}
        trigger={
          <button
            type="button"
            role="combobox"
            title={current?.label || placeholder}
            aria-label={label}
            className="fg-select-trigger fg-select-ghost"
          >
            <span className="fg-select-value">{current?.label || placeholder}</span>
            <ChevronDown className="fg-select-chevron" size={14} />
          </button>
        }
      >
        {(close) => (
          <>
            <div role="list" aria-label={label} className="max-h-64 overflow-auto">
              {items.map((item) => (
                <div role="listitem" key={item.value} className="fg-entity-row">
                  <button
                    type="button"
                    className="fg-entity-choice"
                    aria-current={item.value === value ? 'true' : undefined}
                    title={item.label}
                    onClick={() => {
                      close();
                      onValueChange(item.value);
                    }}
                  >
                    <Check
                      size={14}
                      aria-hidden="true"
                      className={item.value === value ? 'shrink-0' : 'invisible shrink-0'}
                    />
                    <span className="truncate">{item.label}</span>
                  </button>
                  <MenuButton
                    label={actionLabel(item)}
                    commands={[...actions]}
                    onCommand={(action) => {
                      close();
                      onAction(action, item.value);
                    }}
                  >
                    <MoreHorizontal size={15} />
                  </MenuButton>
                </div>
              ))}
            </div>
            {!!items.length && <div className="my-1 h-px bg-border" />}
            {commands.map((command) => (
              <Button
                key={command.id}
                type="button"
                variant="ghost"
                className="w-full justify-start"
                disabled={!!command.disabled}
                onClick={() => {
                  close();
                  onCommand(command.id);
                }}
              >
                {command.label}
              </Button>
            ))}
          </>
        )}
      </Popover>
    </div>
  );
}
