<script setup>
const tasks = [
  {
    name: 'nazwa tasku',
    content: 'tresc tasku',
    priority: 'normal'
  }
]
</script>

<template>
  <div class="task">
    <div class="task_body">
    <div class="task_body_header">
      <div class="task-name">
        <h4>Task name</h4>
      </div>
      <div class="task-uid">
        <span>uid</span>
      </div>
    </div>
    <div class="task_body_content">
      tresc tasku
    </div>
    </div>
    <div class="task_details">
      <div class="task-date-created">
        2025-01-01
      </div>
      <div class="task-date-modified">
        none
      </div>
      <div class="task-priority">
        normal
      </div>
      <div class="task-assigment-person">
        K. Owalski
      </div>
      <div class="task-from-person">
        Al Coholic
      </div>
    </div>
  </div>
</template>


<style>
.task {
  margin: 0 0 10px 0;
  border: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
}

.task > * {
  flex: 0 0 100%;
}

</style>
