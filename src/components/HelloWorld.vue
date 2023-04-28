<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch } from "vue";

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
  count.value++;
  console.log(count.value);
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
watch(
  () => authorData.value.age,
  (count) => {
    console.log(`count is: ${count}`)
  }
)
onMounted(() => {
  //console.log(`The initial count is ${reactiveTest.skill}.`);
});
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p v-html="text"></p>
    <div :id="testId">测试testId</div>
    <button :disabled="isButtonDisabled" @click="testDisabled">Button</button>
  </div>
  <div class="card">
    <button type="button" @click="methodTest()">methodTest</button>
    <p></p>
  </div>
  <div class="card">
    <button type="button" @click="changeReactiveTest()">
      测试修改reactive的值
    </button>
    <p>测试值{{ reactiveTest.age }}</p>
  </div>
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
