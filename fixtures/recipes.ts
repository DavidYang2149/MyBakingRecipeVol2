const recipes = [
  {
    id: 1,
    userId: '1',
    name: '마들렌',
    category: 1,
    product: 16,
    ingredients: [
      { id: 1, name: '설탕', weight: 150 },
      { id: 2, name: '버터', weight: 150 },
      { id: 3, name: '전란', weight: 100 },
      { id: 4, name: '박력분', weight: 150 },
    ],
    description: '마들렌 만드는 방법. 오븐 180도에 10분간 굽기',
  },
  {
    id: 2,
    userId: '1',
    name: '파운드케이크',
    category: 1,
    product: 1,
    ingredients: [
      { id: 2, name: '버터', weight: 100 },
      { id: 3, name: '전란', weight: 120 },
      { id: 1, name: '설탕', weight: 90 },
      { id: 4, name: '박력분', weight: 100 },
    ],
    description: '파운드 케이크 만드는 방법. 오븐 170도에 50분간 굽기',
  },
];

export default recipes;