<script lang="ts">


  export let bio:any;
  export let messageSettings:any;

  export let editorMode: boolean = false;


  import Bio from './Bio/Bio.svelte';
  import MessageSettings from './MessageSettings/MessageSettings.svelte';
</script>




<Bio bio={bio} editorMode={editorMode} />

<br>
<br>

<MessageSettings messageSettings={messageSettings}  editorMode={editorMode}  />



