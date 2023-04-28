<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch } from "vue";
import func from "vue-temp/vue-editor-bridge";

defineProps<{ msg: string }>();

const [
  count,
  text,
  testId,
  isButtonDisabled,
  reactiveTest,
  authorData,
  question,
  answer,
] = [
  ref(0),
  ref("<p style='color:red;'>标签型文字</p>"),
  ref("testId"),
  false,
  ref({ name: "张三", age: 18, skill: { eat: 1, drink: 2 } }),
  ref({
    name: "John Doe",
    books: ["1", "Vue 3 - Basic Guide", "Vue 4 - The Mystery"],
  }),
  ref(""),
  ref("Questions usually contain a question mark. ;-)"),
];
function methodTest() {
  authorData.value.age++;
  console.log("methodTest");
}
function testDisabled() {
  console.log("testDisabled");
}
function changeReactiveTest() {
  let age = reactiveTest.value.age++;
  age++;
  // age ++;
  // reactiveTest.age ++;
}
// 可以直接侦听一个 ref
// watch(question, async (newQuestion, oldQuestion) => {
//   if (newQuestion.indexOf("?") > -1) {
//     answer.value = "Thinking...";
//     try {
//       const res = await fetch("https://yesno.wtf/api");
//       answer.value = (await res.json()).answer;
//     } catch (error) {
//       answer.value = "Error! Could not reach the API. " + error;
//     }
//   }
// });
// watch(
//   () => authorData.value.age,
//   (count) => {
//     console.log(`count is: ${count}`)
//   }
// )
onMounted(() => {
  //console.log(`The initial count is ${reactiveTest.skill}.`);
});
</script>

<template>
  <div class="card">
    <button type="button">newAge is {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
