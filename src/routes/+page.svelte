<script>
	import { boxGen } from '$lib/theme/generator';
	import { Button, Text, Title, Section, Page } from '$lib/components';
</script>

<div class="foo">
	<h1 class="bar">Page</h1>
	<div>smthni</div>
</div>

<Page>
	<Section title="title" subtitle="eblewiojl">
		<Text>
         This is a paragraph. <br/>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quidem obcaecati ex cumque
			illum, harum odit dolore facere possimus amet saepe corporis omnis itaque esse totam qui
			quibusdam sequi aperiam commodi placeat quia nemo. Inventore facilis reiciendis quo eius
			labore.
		</Text>
		<Text span>
         This is a <b>span.</b>
		</Text>
      <Text quote author="Miro Storm">
         This is a <b>quote.</b>
      </Text>

		<Button>Button</Button>
	</Section>
</Page>
