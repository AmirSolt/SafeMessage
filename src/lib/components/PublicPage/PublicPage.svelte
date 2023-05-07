<script lang="ts">


  export let bio:any;
  export let messageSettings:any;

  export let editorMode: boolean = false;
  export let updateBio:any;
  export let updateMessageSettings:any;

  import Bio from './Bio/Bio.svelte';
  import MessageSettings from './MessageSettings/MessageSettings.svelte';
</script>




<Bio bind:bio={bio} editorMode={editorMode} {updateBio} />

<br>
<br>

<MessageSettings bind:messageSettings={messageSettings}  editorMode={editorMode} {updateMessageSettings}  />





<style>

  .beach{

  }

  

</style>