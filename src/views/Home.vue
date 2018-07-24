<template>
	<main>
		<v-container fluid>
			<b-intro-div title="BecauseOfProg" subtitle="Actualités et tutoriels sur le numérique et la programmation."></b-intro-div>
			<v-layout row>
				<v-flex xs12 sm12 md12 lg12 xl12>
					<v-container grid-list-md>
						<v-layout row wrap>
							<!-- Accordéons -->
							<v-flex xs12 sm12 md12 lg3 xl2>
								<v-card>
									<v-list>
										<v-list-group v-for="pane in leftpane" :key="pane.title">
											<v-list-tile slot="item">
												<v-list-tile-action>
													<v-icon>{{ pane.icon }}</v-icon>
												</v-list-tile-action>
												<v-list-tile-content>
													<v-list-tile-title>{{ pane.name }}</v-list-tile-title>
												</v-list-tile-content>
												<v-list-tile-action>
													<v-icon>keyboard_arrow_down</v-icon>
												</v-list-tile-action>
											</v-list-tile>
											<v-list-tile v-for="item in pane.items" :key="item.name">
												<v-list-tile-content>
													<v-list-tile-title>{{ item.name }}</v-list-tile-title>
												</v-list-tile-content>
											</v-list-tile>
										</v-list-group>
									</v-list>
								</v-card>
							</v-flex>

							<!-- Contenu -->
							<v-flex xs12 sm12 md9 lg10>
							</v-flex>
						</v-layout>
					</v-container>
				</v-flex>
			</v-layout>
		</v-container>
	</main>
</template>

<script>
export default {
  data() {
    return {
      leftpane: [
        {
          name: 'Catégories',
          icon: 'description',
          items: [{ name: 'Android' }, { name: 'Windows' }, { name: 'Linux' }]
        },
        {
          name: 'Types',
          icon: 'star',
          items: [
            { name: 'Articles' },
            { name: 'Billets' },
            { name: 'DevBlogs' },
            { name: 'Cours' },
            { name: 'Tutoriels' },
            { name: 'Astuces' },
            { name: 'Autres' }
          ]
        }
      ]
    }
  }
}
</script>