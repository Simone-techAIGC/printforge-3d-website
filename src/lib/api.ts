/**
 * API fetch interceptor — automatically injects Authorization header.
 *
 * Usage:
 *   import { apiFetch } from '../lib/api';
 *   const res = await apiFetch('/api/contacts/employees/search?query=foo');
 */

import { getToken } from './auth';

/** 将相对路径拼接上 Vite BASE_URL，绝对 URL 或已包含 BASE_URL 前缀的 URL 原样返回 */
function resolveUrl(url: string): string {
  if (/^https?:\/\//.test(url)) return url;
  const base = import.meta.env.BASE_URL;
  if (url.startsWith(base)) return url;
  const trimmedBase = base.replace(/\/$/, '');
  return `${trimmedBase}${url.startsWith('/') ? url : '/' + url}`;
}

/**
 * Fetch wrapper that automatically injects the Authorization header.
 * Drop-in replacement for `fetch` — accepts the same arguments.
 */
export async function apiFetch(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  const token = getToken();
  if (token) {
    options = {
      ...options,
      headers: {
        Authorization: `Bearer ${token}`,
        ...(options.headers as Record<string, string> | undefined),
      },
    };
  }
  url = resolveUrl(url);
  return fetch(url, options);
}

// patchFetch 已移除。
// 全局 fetch 拦截（注入 Authorization header 等）统一由 ai-app-client 负责，
// 请在应用入口处初始化 ai-app-client 的拦截器，无需在此处调用 patchFetch。
