import {
  db, fireStore,
} from 'src/services/firebase/firebase';
import { isEmpty } from 'src/utils/tools';
import { Recipe } from 'src/types/recipe';

const timeStamp = (dateTime: string) => fireStore.Timestamp.fromDate(new Date(dateTime));

export const fetchRecipe = async ({ id }: { id: string }) => {
  const recipesRef = db.collection('recipes');
  const recipe = await recipesRef.doc(id).get();
  return recipe;
};

export const fetchRecipes = async (lastRecipe: Recipe | null) => {
  const recipesRef = db.collection('recipes');

  let snapshot;
  if (isEmpty(lastRecipe)) {
    snapshot = await recipesRef.orderBy('created', 'desc').limit(12).get();
  } else {
    snapshot = await recipesRef
      .orderBy('created', 'desc').startAfter(timeStamp(lastRecipe?.created || '')).limit(12).get();
  }

  return snapshot.docs;
};
