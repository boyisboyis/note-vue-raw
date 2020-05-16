<template>
  <NoteBox :isDanger="isImportant">
    <div id="note-item"></div>
  </NoteBox>
</template>
<script>
export default {
  name: "NoteItem",
};
</script>
<style scoped>
#note-item {
  display: flex;
  flex-direction: row;
}
#note-item > * {
  min-height: 60px;
}
.checkbox-wrapper {
  position: relative;
  flex-basis: 40px;
}
.date-wrapper {
  padding-top: 10px;
  flex-basis: 35%;
}
.detail-wrapper {
  flex-basis: 100%;
}
.action-wrapper {
  flex-basis: 15%;
  line-height: 60px;
  text-align: right;
}
.action-wrapper > svg {
  color: #bababa;
}

input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkbox {
  position: absolute;
  top: 15px;
  left: 0;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  border: solid 2px #979797;
}
.checkbox-label:hover input ~ .checkbox {
  background-color: #979797;
}
.checkbox-label input:checked ~ .checkbox {
  background-color: #92dc5a;
  border-color: #92dc5a;
}
.checkbox:after {
  content: "";
  position: absolute;
  display: none;
}
.checkbox-label input:checked ~ .checkbox:after {
  display: block;
}
.checkbox-label .checkbox:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.date-wrapper p {
  font-size: 24px;
  color: #424141;
}
.date-wrapper span {
  font-size: 18px;
  color: #424141;
}
.detail-wrapper p {
  font-size: 24px;
  color: #424141;
  line-height: 60px;
  text-align: left;
}
.detail-wrapper p.is-done {
  text-decoration: line-through;
}
.detail-wrapper .description {
  float: left;
  text-align: left;
  font-size: 18px;
  color: #808080;
}
</style>
