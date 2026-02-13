<template>
  <div
      ref="terminalRef"
      class="bg-black text-gray-100 font-console text-sm p-4 h-full overflow-y-auto"
      @click="focusInput"
  >
    <div class="whitespace-pre-wrap space-y-3 mb-3 flex flex-col">
      <div class="text-green-400">
{{`
██   ██ ███████ ██      ██       ██████
██   ██ ██      ██      ██      ██    ██
███████ █████   ██      ██      ██    ██
██   ██ ██      ██      ██      ██    ██
██   ██ ███████ ███████ ███████  ██████
`}}
      </div>
      <div class="text-green-400">Welcome to Mr.Tolouei Portfolio.</div>
      <div>Type '?' or 'help' to view a list of available commands.</div>
    </div>
    <div
        v-for="(item, index) in history"
        :key="index"
        class="whitespace-pre-wrap"
    >
      <div v-if="item.type === 'command'">
        <span class="text-gray-500">visitor@portfolio:~$</span>
        {{ item.content }}
      </div>
      <div v-else>
        <div class="my-2" v-html="item.content"></div>
      </div>
    </div>
    <div class="flex" v-if="!isRunning">
      <span class="text-gray-500">visitor@portfolio:~$</span>
      <input
          ref="inputRef"
          v-model="input"
          @keydown.enter.prevent="runCommand"
          class="bg-transparent outline-none flex-1 ml-2"
          autofocus
      />
    </div>
  </div>
</template>
<script setup lang="ts">
const { input, history, runCommand, terminalRef, isRunning } = useTerminal()

const inputRef = ref<HTMLInputElement | null>(null)
function focusInput() {
  inputRef.value?.focus()
}
watch(isRunning, async (running) => {
  if (!running) {
    await nextTick()
    focusInput()
  }
})
</script>