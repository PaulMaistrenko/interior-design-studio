const API_BASE = '/api';

export async function getArticleList() {
  try {
    const response = await fetch(`${API_BASE}/blog/articles/`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      credentials: 'same-origin',
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        errorData?.message || `HTTP error! status: ${response.status}`
      );
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Fetch error:', error);
    throw new Error('Не вдалося завантажити статті. Спробуйте пізніше.');
  }
}
