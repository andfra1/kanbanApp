<script setup lang="ts">
import {useModal} from "@/stores/modal.ts";
import Select from "@/components/forms/Select.vue";

const modal = useModal();
</script>

<template>
  <div>
    <div>
      <h6>
        Task nameee
      </h6>
    </div>
    <div class="card-body">
      <label for="">status</label>
      <Select mode="status" data="defaultPriorities"/>
      <div class="card-text">
      </div>
      <textarea>
        tresc tasku
      </textarea>
      <div class="card-text task-details">
        <div>
          <label for="">
            Czas reslizacji
          </label>
          <div class="task-date-created">
            2025-01-01
          </div>
        </div>
        <div>
          <label for="">
            Ostatnia modyfikacja
          </label>
          <div class="task-date-modified">
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
