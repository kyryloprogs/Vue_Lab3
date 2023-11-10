<template>
  <div>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }}
        <button @click="deleteTask(task.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Task } from "@/types";
import { LocalStorageRepository } from "@/repositories/LocalStorageRepository";

@Component
export default class TaskList extends Vue {
  private tasks: Task[] = [];
  private repository = new LocalStorageRepository<Task>("tasks");

  created() {
    this.tasks = this.repository.getAll();
  }

  private deleteTask(taskId: number) {
    this.repository.delete(taskId);
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
</script>