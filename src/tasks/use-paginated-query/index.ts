// хук для пагинации данных
// загружает и объединяет данные постранично
// поддерживает loadNext, hasMore
// пример использования
const { data, loadNext, hasMore } = usePaginatedQuery(page =>
  fetch(`/api/items?page=${page}&limit=10`)
)
