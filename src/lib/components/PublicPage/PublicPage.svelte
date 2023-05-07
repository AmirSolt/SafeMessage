<script lang="ts">


  import {page} from '$app/stores';
	$: ({styling} = $page.data)

  export let editorMode: boolean = false;

  import Bio from './Bio/Bio.svelte';
  import MessageSettings from './MessageSettings/MessageSettings.svelte';
</script>


<h1>
  styling: {styling.template}
</h1>

<Bio editorMode={editorMode} />

<br>
<br>

<MessageSettings  editorMode={editorMode}  />





<style>

  /* .beach{

  } */

  

</style>