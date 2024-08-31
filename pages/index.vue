<template >

     <PageSection :id="homeSection.id" >
       <h1>HERO BANNER</h1>
       <div>
         <VList :items="socialMedias" v-slot="{item}">
             <a :href="item.url" >{{ item.label }}</a >
         </VList>
       </div>
     </PageSection>

    <PageSection :id="ourTeamSection.id">
      <h1>{{ ourTeamSection.label }}</h1>
      <p>
        Camps Breakerz is a dance team that was established back in 2004 to represent the Palestinian people and their continuous struggle.
        CB Crew has been showing the uniqueness of dance and art to the people of Gaza through performing and teaching and eventually globally representing and speaking.
        CB Crew reached multiple dreams starting with waking people on dancing and its importance to establishing the first dance school in Nusierat refugee camp trough a campaign in the middle of Gaza strip.
        CB Crew school has been initialing generation after another. Not only a place for dancing and emotion expressing, but also supporting the children with external needs such as clothing and educational needs.
        CB Crew itself went through multiple dramatic wars starting with 2009 where their dancing place was bombed.
        In 2014 we danced on piles  of Northern town where it was entirely removed with its hopes  forced people to evict and live somewhere else.
        CB crew believes art can make change realizing that dancing and moving with the children can help healing traumas.
        By moving the children along with the rhythm they will gain the feeling of existence and belonging.
        CB Crew had participated in a rehabilitation program in 2009 that lasted three months where buses dropped children over to dance and spend time with the crew.
        Unfortunately, another war in 2014. We traveled to UN schools where people where evicted to and shared some dancing with the children and built new hopes during the war.
        It became a routine and purpose of CB school to keep on dancing with the community.
        The crew spent  the last days before the present war with Israel dancing in public and cheering children for expressing themselves.
        Sadly, Gaza is getting heavy loads of hits at this moment where all kind of bombing being used, so we stopped for safety reasons.
        Now, there are thousands of bombed places and evicted families. The crew got to know places where people evicted.
        Those people left their homes beautiful memories behind and ran for safety and a new hope of life.
        Most of them returned to no home and searched for favorite toys or school items from under the pile.
        CB crew go to those shelters and introduce itself to gather the children in a circle.
        From that connection to actual dance moves on the dancing floor where everyone is welcome to participate.
        CB crew had been supported by individuals. The Crew has been self-managing and planning since 2004 and always comes with great outcomes.
        Our children deserve equal life as any child in the world. They deserve to smile laugh and hold on a superhero.
        CB Crew  has named the dance series Our Children Deserve, and plan on keeping dancing with those evicted children and hoping them they can come to our school and dance on daily base.
        CB Crew need your hand to promote launching more series of dancing in the shelters and public by donating funds that will be spent on buying clothes, shoes, and school items.
        Please reach out and deliver your support to those individuals.
        You can help and save humanity.
      </p>
      <p>If you are interested in donating, please contact us on either Instagram or email us on campsbreakers@gmail.com</p>
    </PageSection>

    <PageSection :id="ourTeamSection.id">
      <h1>{{ ourTeamSection.label }}</h1>
      <p>Join the board of CB Crew to embrace dancing in Palestine</p>
      <div>
        <VList :items="teamMembers" v-slot="slotProps">
          <p>{{slotProps.item.name}}</p>
          <p>{{ slotProps.item.role}}</p>
        </VList>
      </div>
    </PageSection>

    <PageSection :id="contactSection.id">
      <h1>{{ contactSection.label }}</h1>
      <form >
        CONTACT FORM
      </form >
    </PageSection>
  <footer>
    <button>
      <a href="#" >Top</a >
    </button>
    <p>I am a footer</p>
  </footer>

</template >

<script setup lang="ts" >
import { useSocialMediaLinks } from "~/composables/useSocialMediaLinks";

const {contactSection, homeSection, ourTeamSection, danceTherapySection} = useContent()
const  teamMembers = useTeamMembers()
const {socialMedias} = useSocialMediaLinks()

</script >
