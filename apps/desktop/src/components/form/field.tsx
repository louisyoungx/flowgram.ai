/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { useId, type ReactNode } from 'react';

import { ChevronRight } from 'lucide-react';

import { errorText } from '../../lib/i18n';

export function FormField({
  label,
  required,
  hint,
  children,
  error,
  meta,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
  error?: string;
  meta?: ReactNode;
}) {
  const id = useId();
  return (
    <div
      className="nf-field"
      role="group"
      aria-labelledby={`${id}-label`}
      aria-describedby={hint ? `${id}-hint` : undefined}
    >
      <div className="nf-label-row">
        <span id={`${id}-label`} className="nf-label">
          {label}
          {required && <span className="nf-required"> *</span>}
        </span>
        {meta}
      </div>
      {children}
      {hint && (
        <p id={`${id}-hint`} className="nf-hint">
          {hint}
        </p>
      )}
      {error && (
        <p role="alert" className="nf-error">
          {errorText(error)}
        </p>
      )}
    </div>
  );
}
export function FormSection({
  title,
  children,
  summary,
}: {
  title: string;
  children: ReactNode;
  summary?: string;
}) {
  return (
    <details className="nf-section">
      <summary>
        <ChevronRight size={14} />
        <span>{title}</span>
        <span className="nf-section-summary">{summary}</span>
      </summary>
      <div className="nf-section-content">{children}</div>
    </details>
  );
}
export { Select } from '../ui/select';
export function StatusLabel({ children, error = false }: { children: ReactNode; error?: boolean }) {
  return <span className={`nf-status ${error ? 'nf-error' : ''}`}>{children}</span>;
}
