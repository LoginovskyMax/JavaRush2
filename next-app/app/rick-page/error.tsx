"use client";

export default function ProductsError({ error, reset }: {error: ErrorEvent, reset: () => void}) {
  return (
    <div>
      <h2>Что-то пошло не так при загрузке продуктов!</h2>
      <p>{error.message}</p>
      <button
        // reset() — это функция для повторной попытки рендера страницы
        onClick={() => reset()}
      >
        Попробовать снова
      </button>
    </div>
  );
}