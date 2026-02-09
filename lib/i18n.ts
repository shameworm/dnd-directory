import type { Locale } from "./types";

const strings = {
  en: {
    appTitle: "D&D Directory",
    appSubtitle:
      "Quick reference for D&D 5th Edition rules, actions, conditions, and more",
    searchPlaceholder: "Search rules...",
    noResults: "No results found",
    noResultsHint: "Try a different search term",
    viewAll: (count: number, title: string) =>
      `View all ${count} results in ${title}`,
    home: "Home",
    settings: "Settings",
    theme: "Theme",
    language: "Language",
    notFoundTitle: "Category Not Found",
    notFoundText:
      "The scroll you seek has been lost to the ages. Perhaps it was destroyed by a wayward fireball.",
    returnHome: "Return to Directory",
    noDescription: "See class or race description for details.",
  },
  uk: {
    appTitle: "D&D Довідник",
    appSubtitle:
      "Швидкий довідник з правил D&D 5-ї редакції: дії, стани, спорядження та інше",
    searchPlaceholder: "Пошук правил...",
    noResults: "Нічого не знайдено",
    noResultsHint: "Спробуйте інший пошуковий запит",
    viewAll: (count: number, title: string) =>
      `Переглянути всі ${count} результати в ${title}`,
    home: "Головна",
    settings: "Налаштування",
    theme: "Тема",
    language: "Мова",
    notFoundTitle: "Категорію не знайдено",
    notFoundText:
      "Сувій, який ви шукаєте, загублений у віках. Можливо, його знищив випадковий вогняний шар.",
    returnHome: "Повернутися до довідника",
    noDescription: "Дивіться опис класу або раси для деталей.",
  },
  ru: {
    appTitle: "D&D Справочник",
    appSubtitle:
      "Краткий справочник по правилам D&D 5-й редакции: действия, состояния, снаряжение и другое",
    searchPlaceholder: "Поиск правил...",
    noResults: "Ничего не найдено",
    noResultsHint: "Попробуйте другой поисковый запрос",
    viewAll: (count: number, title: string) =>
      `Показать все ${count} результатов в ${title}`,
    home: "Главная",
    settings: "Настройки",
    theme: "Тема",
    language: "Язык",
    notFoundTitle: "Категория не найдена",
    notFoundText:
      "Свиток, который вы ищете, утерян в веках. Возможно, его уничтожил случайный огненный шар.",
    returnHome: "Вернуться в справочник",
    noDescription: "Смотрите описание класса или расы для подробностей.",
  },
};

export interface UIStrings {
  appTitle: string;
  appSubtitle: string;
  searchPlaceholder: string;
  noResults: string;
  noResultsHint: string;
  viewAll: (count: number, title: string) => string;
  home: string;
  settings: string;
  theme: string;
  language: string;
  notFoundTitle: string;
  notFoundText: string;
  returnHome: string;
  noDescription: string;
}

export function getUIStrings(locale: Locale): UIStrings {
  return strings[locale] ?? strings.en;
}
