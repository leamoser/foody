<template>
  <view-title title="Beschwerden<br>eintragen" :icon="IssuesIconUrl" />
  <div class="form">
    <div class="form-line form-mono">
      <div class="form-field">
        <label for="day">Tag</label>
        <input type="date" id="day" v-model="day" :readonly="isProcessing" />
      </div>
      <div class="form-field form-mono">
        <label for="time">Uhrzeit</label>
        <input type="time" id="time" v-model="time" :readonly="isProcessing" />
      </div>
    </div>
    <div class="form-field form-issues">
      <label>Zutreffende Beschwerden anwählen</label>
      <div class="ct-issues">
        <div
          class="issue"
          v-for="(issue, index) in issues"
          :key="`issue-${issue}-${index}`"
          @click="toggleIssue(issue)"
          :class="{ active: activeIssues.includes(issue) }"
        >
          <p class="typo-accent" v-text="issue" />
        </div>
      </div>
    </div>
  </div>
  <div class="ct-submit">
    <action-button @click="insertIssue" :disabled="!formValid || isProcessing">
      eintragen
    </action-button>
  </div>
</template>

<script setup lang="ts">
import IssuesIconUrl from "@/assets/icons/issues_extended.svg";
import ViewTitle from "@/components/layout/ViewTitle.vue";
import { computed, onMounted, ref } from "vue";
import { useSupabase } from "@/composables/useSupabase";
import { useUser } from "@/composables/useUser";
import { create, format } from "datenow-ts";
import ActionButton from "@/components/ActionButton.vue";
import { useRoute, useRouter } from "vue-router";

const { uid } = useUser();
const { isProcessing, wasSuccessful, addIssue, issues } = useSupabase();
const router = useRouter();
const route = useRoute();
const day = ref<string>("");
const time = ref<string>("");
const activeIssues = ref<string[]>([]);
const formValid = computed<boolean>(() => {
  return !!day.value && !!time.value && !!activeIssues.value.length;
});
const toggleIssue = (issue: string): void => {
  if (activeIssues.value.includes(issue)) {
    removeActiveIssue(issue);
  } else {
    addActiveIssue(issue);
  }
};
const addActiveIssue = (issue: string): void => {
  activeIssues.value.push(issue);
};
const removeActiveIssue = (issue: string): void => {
  const index = activeIssues.value.indexOf(issue);
  if (index < 0) return;
  activeIssues.value.splice(index, 1);
};
const insertIssue = async (): Promise<void> => {
  if (!uid.value) return;
  await addIssue({
    uid: uid.value,
    created_at: create.dateByDatestring(`${day.value} ${time.value}`),
    issues: JSON.stringify(activeIssues.value),
  });
  if (wasSuccessful.value) {
    await router.push({ name: "home" });
  }
};

onMounted(() => {
  const date = route.query.day
    ? create.dateByDatestring(route.query.day.toString() + "T12:00:00")
    : create.dateNow();
  day.value = format.toDate("Y-m-d", date);
  time.value = format.toTime("H:i", date);
});
</script>

<style lang="scss" scoped>
.form {
  margin-top: $gap_inner-big;
  .form-issues {
    margin-top: $gap_inner-small;
  }
}
.ct-issues {
  @include flex(row, flex-start, center, $gap_inner-small);
  flex-wrap: wrap;
  .issue {
    display: block;
    border: 1px solid $color_accentdark;
    @include flex();
    padding: $gap_inner-small;
    &.active {
      background: $color_accentlight;
    }
  }
}
.ct-submit {
  position: fixed;
  bottom: px(65);
  left: 0;
  width: 100vw;
  @include flex();
}
</style>
