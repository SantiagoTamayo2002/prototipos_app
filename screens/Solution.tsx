import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

declare global {
  interface Window {
    hljs: any;
  }
}

const Solution: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.hljs) {
      window.hljs.highlightAll();
    }
  }, []);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
        <div className="flex size-12 shrink-0 items-center justify-start">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center h-12 w-12 rounded-full text-[#0d121b] dark:text-white"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
              arrow_back_ios_new
            </span>
          </button>
        </div>
        <h2 className="text-[#0d121b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Solución en Python
        </h2>
        <div className="flex w-12 items-center justify-end"></div>
      </div>
      <main className="flex-1 px-4 py-4 pb-24">
        <div className="rounded-lg bg-code-bg-light dark:bg-code-bg-dark overflow-hidden shadow-sm border border-border-light dark:border-gray-800">
          <pre className="overflow-x-auto p-4">
            <code className="language-python hljs font-code text-sm bg-transparent">
{`def two_sum(nums, target):
    num_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i
    return []

# Example usage:
numbers = [2, 7, 11, 15]
target_sum = 9
result = two_sum(numbers, target_sum)
print(f"Indices: {result}")

# Another example
numbers2 = [3, 2, 4]
target_sum2 = 6
result2 = two_sum(numbers2, target_sum2)
print(f"Indices: {result2}")

# Edge case: No solution
numbers3 = [3, 3]
target_sum3 = 7
result3 = two_sum(numbers3, target_sum3)
print(f"Indices: {result3}")

# Final test case for a longer list
# to demonstrate scrolling
long_list = list(range(1, 51))
long_target = 99
result_long = two_sum(long_list, long_target)
print(f"Indices for long list: {result_long}")`}
            </code>
          </pre>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Solution;