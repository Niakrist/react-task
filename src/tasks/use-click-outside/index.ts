// хук определяет клик вне элемента.
// принимает callBack. Возвращает ref для привязки к элементу

const ref = useClickOutside(() => setIsOpen(false))
