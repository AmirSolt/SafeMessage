<script lang="ts">




  export let editorMode: boolean = false;


  import Bio from './Bio/Bio.svelte';
  import Message from './Message/Message.svelte';
</script>



<Bio  editorMode={editorMode} />

<br>
<br>

<Message  editorMode={editorMode}  />




