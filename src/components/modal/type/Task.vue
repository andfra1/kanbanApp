<script setup lang="ts">
import Select from "@/components/forms/Select.vue";

const defaultSettings = {
  toggle: false,
  title: 'Task #666',
  type: 'task',
  text: 'Some text here :)',
};
</script>

<template>
  <div>
    <div>
      <h6>
        {{ defaultSettings.title }}
      </h6>
    </div>
    <div class="card-body">
      <label for="">status</label>
      <Select mode="status" data="defaultPriorities"/>
      <div class="card-text">
        {{ defaultSettings.text }}
      </div>
      <div>
        <label for="">Opis</label>
        <textarea id="card-description" class="form-control" rows="3">
        tresc tasku
      </textarea>
        <button class="btn-success">Zapisz</button>
      </div>
      <div class="card-text task-details">
        <div>
          <div>
            Czas reslizacji
          </div>
          <div class="d-flex align-items-center">
            <div class="task-date-created">
              <label for="task-date-start">
                od
              </label>
              <input type="date" name="task-date-start" id="task-date-start">
            </div>
            <div class="task-date-created">
              <label for="task-date-end">
                do
              </label>
              <input type="date" name="task-date-end" id="task-date-end">
            </div>
          </div>
        </div>
        <div>
          <div class="d-inline">
            Ostatnia modyfikacja:
          </div>
          <div class="d-inline task-date-modified">
            none
          </div>
        </div>
        <div>
          <div class="d-inline">
            Data utworzenia:
          </div>
          <div class="d-inline task-date-modified">
            none
          </div>
        </div>
        <div>
          <label for="">Priorytet: </label>
          <div class="task-priority">
            <Select mode="status" data="defaultPriorities"/>
          </div>
        </div>
        <div>
          <label for="">Osoby przypisane:</label>
          <div class="task-assigment-person">
            K. Owalski
          </div>
        </div>
        <div>
          <label for="">Utworzone przez: </label>
          <div class="task-from-person">
            Al Coholic
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
