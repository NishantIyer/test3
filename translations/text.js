/**
 * @typedef {"en-US"} DefaultLocale
 * @typedef {DefaultLocale | "zh-CN" | "es-ES" | "fr-FR" | "pt-BR" | "ja" | "ko" | "ru"} Locale
 */

/** @type {Readonly<Record<Locale, string>>} */
export const languageMap = {
  "en-US": "English",
  "es-ES": "Español",
  "fr-FR": "Français",
  "pt-BR": "Português Brasileiro",
  "zh-CN": "简体中文",
  ja: "日本語",
  ko: "한국어",
  ru: "Русский",
};

/** @type {Readonly<Record<Locale, string>>} */
export const titleMap = {
  "en-US": "A remote compute architecture.",
  "es-ES": "Una arquitectura de cómputo remoto.",
  "fr-FR": "Une architecture de calcul à distance.",
  "zh-CN": "远程计算架构。.",
  ja: "リモートコンピューティングアーキテクチャ。.",
  ko: "원격 컴퓨팅 아키텍처.",
  ru: "Архитектура удаленных вычислений.",
};

/** @type {Readonly<Record<Locale, {lightweight:string;realtime?:string;suspense?:string;pagination?:string;backendAgnostic?:string;renderingStrategies?:string;typescript?:string;remoteLocal?:string;}>>} */
export const featuresMap = {
  "en-US": {
    lightweight: "Lightweight",
    edge: "Edge-Inspired",
    latency: "Latency",
    remote: "Remote And Local",
    dratp: "DRATP",
    credits: "Compute Credits",
    prcp: "PRCP",
    task: "Task Prioritization",
  },
  "fr-FR": {
    lightweight: "Léger",
    realtime: "Temps réel",
    backendAgnostic: "Indépendant du Backend",
  },
  "pt-BR": {
    lightweight: "Leve",
    realtime: "Tempo-real",
    suspense: "Suspense",
    pagination: "Paginação",
    backendAgnostic: "Backend Agnóstico",
    renderingStrategies: "Pronto para SSR / SSG",
    typescript: "Pronto para TypeScript",
    remoteLocal: "Remoto + Local",
  },
  ru: {
    lightweight: "Лёгкий",
    realtime: "В реальном времени",
    suspense: "Задержка",
    pagination: "Пагинация",
    backendAgnostic: "Бэкэнд-независимый",
    renderingStrategies: "SSR / SSG",
    typescript: "TypeScript",
    remoteLocal: "Удалённо + Локально",
  },
};

/** @type {Readonly<Record<Locale, string>>} */
export const headDescriptionMap = {
  "en-US": "SWR is a React Hooks library for data fetching. SWR first returns the data from cache (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data again.",
  "fr-FR": "SWR est une libraire de React Hooks pour récupérer des données. SWR retourne d'abord les données en cache (stale), puis envoie la requête (revalidate), et enfin retourne les données à jour.",
  "pt-BR": "SWR é uma biblioteca React Hooks para data fetching. SWR primeiro retorna os dados do cache (stale), então envia a requisição de busca (revalidate), e finalmente vem com os dados atualizados novamente.",
  ru: "SWR — это библиотека React хуков для получения данных. SWR сначала возвращает данные из кеша (устаревшие), затем отправляет запрос на выборку (ревалидация) и, наконец, снова получает актуальные данные.",
};

/** @type {Readonly<Record<Locale, string>>} */
export const feedbackLinkMap = {
  "en-US": "Question? Give us feedback →",
  "es-ES": "¿Dudas? Danos tu feedback →",
  "fr-FR": "Question? Donnez-nous votre avis →",
  "pt-BR": "Dúvidas? Nos dê feedback →",
  "zh-CN": "有疑问？给我们反馈 →",
  ko: "질문이 있으신가요? 피드백을 남겨주세요 →",
  ru: "Вопросы? Оставьте нам отзыв →",
};

/** @type {Readonly<Record<Locale, string>>} */
export const editTextMap = {
  "en-US": "Edit this page on GitHub →",
  "es-ES": "Edite esta página en GitHub →",
  "fr-FR": "Modifier cette page sur GitHub →",
  "pt-BR": "Edite essa página no GitHub →",
  "zh-CN": "在 GitHub 上编辑本页 →",
  ja: "Github で編集する →",
  ko: "Github에서 이 페이지 편집하기 →",
  ru: "Редактировать эту страницу на GitHub →",
};

/** @type {Readonly<Record<Locale, { utmSource: string; text: string; suffix?: string | undefined }>>} */
export const footerTextMap = {
  "en-US": { utmSource: "swr", text: "Powered by" },
  "es-ES": { utmSource: "swr_es-es", text: "Desarrollado por" },
  "fr-FR": { utmSource: "swr_fr-fr", text: "Propulsé par" },
  "pt-BR": { utmSource: "swr_pt-br", text: "Desenvolvido por" },
  "zh-CN": { utmSource: "swr_zh-cn", text: "由", suffix: "驱动" },
  ja: { utmSource: "swr_ja", text: "提供" },
  ko: { utmSource: "swr_ko", text: "Powered by" },
  ru: { utmSource: "swr_ru", text: "Работает на" },
};

/** @type {Readonly<Record<Locale, string>>} */
export const tableOfContentsTitleMap = {
  "en-US": "On This Page",
  "es-ES": "En esta página",
  "fr-FR": "Sur cette page",
  "pt-BR": "Nessa página",
  ru: "На этой странице",
};

/** @type {Readonly<Record<Locale, string>>} */
export const searchPlaceholderMap = {
  "en-US": "Search documentation...",
  "es-ES": "Buscar documento...",
  "fr-FR": "Rechercher dans la doc...",
  "pt-BR": "Buscar documentação...",
  ko: "문서 검색...",
  ru: "Искать в документации...",
};

/** @type {Readonly<Record<Locale, string>>} */
export const gitTimestampMap = {
  "en-US": "Last updated on",
  "fr-FR": "Dernière mise à jour le",
  ru: "Последнее обновление",
};
