
import { reactive } from 'vue';

// グローバルな状態の型を定義
interface DashboardScreenState {
  active: string;
}

// グローバルな状態を作成
const state = reactive<DashboardScreenState>({
  active: 'project-preference'
});

// グローバルな状態を返す関数
export const useDashboardScreenState = () => {
  return {
    activeScreen: state
  }
}
