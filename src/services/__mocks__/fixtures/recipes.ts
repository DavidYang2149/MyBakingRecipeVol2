import { fireStore } from 'src/services/firebase/firebase';

import { RecipesState } from 'src/types/recipe';
import { ResponseRecipe } from 'src/types/response';

const recipes: RecipesState = {
  recipesBook: [
    {
      id: '1',
      userId: '1',
      title: '마들렌',
      category: 1,
      product: 16,
      ingredients: [
        { id: 1, ingredient: '설탕', weight: 150 },
        { id: 2, ingredient: '버터', weight: 150 },
        { id: 3, ingredient: '전란', weight: 100 },
        { id: 4, ingredient: '박력분', weight: 150 },
      ],
      newIngredient: { id: 0, ingredient: '', weight: 0 },
      description: '마들렌 만드는 방법. 오븐 180도에 10분간 굽기',
      created: '2021-07-02T08:10:56.000Z',
      updated: '2021-07-05T05:21:34.000Z',
      show: true,
      upload: '',
      image: '',
    },
  ],
  lastRecipe: { recipe: null, isLast: false },
};

const theCreatedDate = fireStore.Timestamp.fromDate(new Date('2021-07-02 17:10:56'));
const theUpdatedDate = fireStore.Timestamp.fromDate(new Date('2021-07-05 14:21:34'));

export const responseRecipes: ResponseRecipe[] = [
  {
    id: '1',
    userId: '1',
    title: '마들렌',
    category: 1,
    product: 16,
    ingredients: [
      { id: 1, ingredient: '설탕', weight: 150 },
      { id: 2, ingredient: '버터', weight: 150 },
      { id: 3, ingredient: '전란', weight: 100 },
      { id: 4, ingredient: '박력분', weight: 150 },
    ],
    newIngredient: { id: 0, ingredient: '', weight: 0 },
    description: '마들렌 만드는 방법. 오븐 180도에 10분간 굽기',
    created: theCreatedDate,
    updated: theUpdatedDate,
    show: true,
    upload: '',
    image: '',
  },
];

export default recipes;
