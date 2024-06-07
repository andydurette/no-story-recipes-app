export type HomeStackParamList = {
  Index: undefined;
};

export type RecipesStackParamList = {
  Index: undefined;
  Recipe: CreateRecipe;
};

export type SettingsStackParamList = {
  Index: undefined;
};

export type BottomTabStackParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Recipes: NavigatorScreenParams<RecipeStackParamList>;
  Settings: NavigatorScreenParams<SettingsStackParamList>;
};

export type RootNavigationProp = NavigationProp<
  NativeStackNavigationProp<HomeStackParamList>,
  NativeStackNavigationProp<RecipesStackParamList>,
  NativeStackNavigationProp<SettingsStackParamList>
>;
