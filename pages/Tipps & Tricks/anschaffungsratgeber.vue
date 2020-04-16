<template>
  <div>
    <Intro small>
      <h2 class="mb-5">Anschaffungsratgeber</h2>
      <b-row class="mb-4">
        <b-col offset-md="1" md="10">
          <p>
            Viele, die neu ins Hobby kommen, sind erstmal richtiggehend von den
            schieren Möglichkeiten erschlagen, insbesondere was das römische
            Reenactment angeht. Es gibt dank Funden, Reliefdarstellungen und
            schriftlichen Aufzeichnungen eine riesige Vielfalt an Reproduktionen
            und Dingen, die man sich zulegen oder in manchen Fällen am besten
            selbst machen kann. Neben weiteren Hilfen, die wir auf unserer Seite
            anbieten, muss jedoch ebenso die Qualität und Verarbeitung der
            käuflich erwerbbaren Gegenstände beachtet werden. Dies ist sehr
            wichtig, da es hier bisweilen große Unterschiede gibt. Gerade
            hierbei kann unsere Gruppe unterstützen. Wir können unser Fachwissen
            weitergeben oder vielleicht auch nur den richtigen Kontakt
            herstellen, beispielsweise an ein Mitglied unserer Truppe, welches
            doppelte Gegenstände (käuflich) abzugeben hat oder an eine begabte
            Schneiderin, die für wenig Geld entsprechende Kleidung herstellen
            kann. Manchmal reicht auch nur der richtige Link zu einem Produkt,
            bei dem unsere Gruppe aus Erfahrung sagen kann, dass es sich lohnt,
            dieses zu erwerben und was dabei beachtet werden muss.
          </p>

          <p>
            Ebenso wichtig ist jedoch auch die Reihenfolge der Anschaffungen.
            Aufgrund schöner glänzender Helme oder verzierter Schwerter ist man
            schnell dazu geneigt, sich diese prägnanten Dinge zuerst zuzulegen.
            Manchmal sogar mehrere davon, und merkt dann in der endgültigen
            Darstellung oder im Lagerleben, dass noch so viele wichtige Dinge
            fehlen. Darum haben wir diesen Anschaffungsratgeber zusammengestellt
            um eine mögliche Reihenfolge der Anschaffungen zu empfehlen, wie es
            aus unserer Erfahrung am meisten Sinn ergibt.
          </p>
        </b-col>
      </b-row>
    </Intro>

    <Section v-for="category in categories" :title="category.title">
      <AnschaffungsratgeberComponent
        :elements="category.elements"
        :intro="category.intro"
      />
    </Section>
  </div>
</template>

<script>
import AnschaffungsratgeberComponent from '~/components/anschaffungselement'
import Intro from '~/components/intro'
import Section from '~/components/section'

export default {
  name: 'Anschaffungsratgeber',
  components: { AnschaffungsratgeberComponent, Intro, Section },
  data: () => ({
    categories: [
      {
        title: '1. Grundkleidung',
        intro:
          'Diese Gegenstände sollte man sich unbedingt zu Beginn der Reenactmentkarriere zulegen. Hier setzt man ein erstes stimmiges Gesamtbild eines Römers. Dank des Militärgürtels ist man auch direkt als Soldat zu erkennen.',
        elements: [
          {
            imgSrc: 'Tunika',
            title: 'Winter / Sommer Tunika',
            text:
              'Für den Sommer benötigt man eine Tunika aus Leinen, für den Winter aus kuscheliger Wolle oder Walkloden. Entsprechende Schnittmuster sind auch auf unserer Seite zu finden. Nicht vergessen, dass man auch Ersatztuniken braucht. Für Mitglieder steht die Möglichkeit offen, sich Tuniken zum Materialpreis auf Maß anfertigen zu lassen.'
          },
          {
            imgSrc: 'Hose',
            title: 'Hose (Feminalia / Bracae)',
            text:
              'Zu unserer dargestellten Zeit war dies schon ein übliches Kleidungsstück, gerade nördlich der Alpen. Auch hier besteht innerhalb der Gruppe die Möglichkeit, sie zum Materialpreis zu bekommen. Vorzugsweise eignen sich dunkle, ruhige Farben und Erdtöne.'
          },
          {
            imgSrc: 'Focale',
            title: 'Halstuch (Focale)',
            text:
              'Ob aus Leinen oder warmer Wolle gefertigt, je nach Vorliebe, hält es warm und schützt den Hals vor der Rüstung.'
          },
          {
            imgSrc: 'Caligae',
            title: 'Offene Stiefel (Caligae)',
            text:
              'Der typischste römische Schuh, der offene Marsch-Stiefel, ist besonders geeignet für den Sommer. Er verhindert Käsefüße und kann im Notfall auch mit dicken Socken getragen werden, falls es mal kälter wird.'
          },
          {
            imgSrc: 'Stiefel',
            title: 'Geschlossene Stiefel (Calcei)',
            text:
              'Der geschlossene Marsch-Stiefel, der Calceus, wird ebenso benagelt wie die Caligae, ist jedoch besser geeignet für germanisches Wetter.'
          },
          {
            imgSrc: 'Cingulum',
            title: 'Militärgürtel (Cingulum)',
            text:
              'Ohne ihn wäre jede Tunika ein Kleid, kein Legionär geht ohne ihn aus dem Haus. Auch hier gilt: Achtung vor qualitativen Unterschieden bei den käuflich zu erwerbenden Repliken, am besten lässt man sich von uns beraten. Ohne die Beschlagenen Lederstreifen vorne wäre es ein normaler Balteus.'
          },
          {
            imgSrc: 'Socken',
            title: 'Socken (Tibialia / Udones)',
            text:
              'Ob aus Filz oder Wolle, ob in der Caligae, im Calceus oder als eine Art Pantoffel, sind sie ideal für Winter und Herbst.'
          }
        ]
      },
      {
        title: '2. Rüstung und Lagerleben',
        intro:
          'Wenn die Grundlagen stimmen, kann man sich guten Gewissens mit den weiteren Gegenständen beschäftigen, die einen römischen Soldaten ausgemacht haben. Es gilt zu beachten, dass Lagerausrüstung bedeutend nützlicher sein kann als eine Rüstung..',
        elements: [
          {
            imgSrc: 'Subarmalis',
            title: 'Unterrüstung (Subarmalis)',
            text:
              'Keine Rüstung sollte ohne die entsprechende Unterrüstung (wie der lat. Name schon sagt) getragen werden. Sie entlastet die Schultern und kann im Winter auch ohne Rüstung als eine Art gepolsterte Weste getragen werden. Pteruges aus Leder oder Stoff an Ärmeln und Hüfte können für zusätzlichen Schutz vor Abrieb durch die Rüstung sorgen.'
          },
          {
            imgSrc: 'Gladius',
            title: 'Schwert (Gladius)',
            text:
              'Das römische Kurzschwert, oder der Bienenstachel der Legion, gibt es in verschiedenen Modellen und Qualitäten. Wer damit auch aktiv etwas machen möchte (wie z. B. Kampfübungen oder Schlachtennachstellungen) sollte am Anfang auch ein paar Euro mehr für ein Modell aus schaukampffähigem Federstahl investieren.'
          },
          {
            imgSrc: 'Pugio',
            title: 'Dolch (Pugio)',
            text:
              'Für den Legionäre war dies das Allzweckmesser und zugleich die Waffe in der Not. Für den modernen Reenacteur dient er meist als Bieröffner und Deko, da man aus gesetzlichen Gründen die Schneiden nicht scharf machen darf.'
          },
          {
            imgSrc: 'Helm',
            title: 'Helm (Cassis)',
            text:
              'Nicht nur Obelix sammelte gerne Helme, moderne Römerfans haben meist die gleiche Angewohnheit. Bei der großen Auswahl ist bei fast jeder Epoche mindestens einer dabei, der einem passen sollte. Bevor man wahllos kauft, sollte man bei befreundeten Legionären einfach mal die Helme und deren Größe ausprobieren.'
          },
          {
            imgSrc: 'Segmentata',
            title: 'Rüstung (Lorica Segmentata / Hamata / Squamata)',
            text:
              '150 n.Chr. hat man eine fantastische Auswahl an Rüstungen. Die zu dieser Zeit unter Legionären meistverbreitete Variante ist die Segmentata aus Stahlplatten / Segmenten. Eine Kettenrüstung wie die Hamata ist für Legionäre, wie auch Auxiliare ebenso kein Problem. Gerade für besondere Ränge eignet sich allerdings auch die Schuppenpanzerrüstung, die Squamata sehr gut.'
          },
          {
            imgSrc: 'Scutum',
            title: 'Schild (Scutum)',
            text:
              'Für den Legionär ist es das klassische eckige Scutum, für besondere Aufgaben / Ränge oder für Auxiliare das Ovale Scutum, oder sogar das runde Parma.'
          },
          {
            imgSrc: 'Esskram',
            title: 'Speiseutensilien (Vasaorum)',
            text:
              'Was am Anfang problemlos aus dem Magazin der Gruppe verliehen werden kann, darf mit der Zeit gerne individuell angeschafft werden, damit jeder sein eigenes Lieblingsbecherchen, - tellerchen, - messerchen etc. hat.'
          },
          {
            imgSrc: 'Armleder',
            title: 'Armstulpen / Wickel (Brachii)',
            text:
              'Auf Abbildungen werden sie nicht gezeigt und aufgrund ihrer Beschaffenheit aus Leder oder Stoff ist auch die Fundlage spärlich. Unsere Gruppe hat sich trotzdem zu dieser Ausrüstung entschieden. Wer ein Paar Übungskämpfe oder Formationen absolviert hat, wird schnell merken, dass die modernste Armee der Antike wohl eher weniger mit nackten Ärmchen in den Kampf zog, da man schnell Wunden, besonders an der Schwerthand, erleiden kann. Wer sich noch keine eiserne Manica leisten kann, sollte sich an der Schwert- wie auch an der Schildhand mit Leder oder Stoff behelfen.'
          }
        ]
      },
      {
        title: '3. Zusätzliche Rüstung und Ausrüstung',
        intro:
          'Es gibt immer etwas, das man noch anschaffen kann. Weitere Schutzausrüstung, eine Steigerung der Wetterfestigkeit oder sogar ein Zelt könnten die nächtsen Schritte sein.',
        elements: [
          {
            imgSrc: 'Mantel',
            title: 'Umhang / Mantel (Paenula)',
            text:
              'Der römische Mantel, entweder doppelt genommen und eckig oder Halbkreisförmig mit Kapuze, bietet Spielraum bei Schnitte und Materialien. Wie auch beim Rest empfiehlt sich entweder ein typisches "Mars"-Rot oder gedeckte Farben, wie ein dunkles Blau, Grau oder Braun. Wird mit einer kräftigen Fibel um den Hals und die Schultern getragen.'
          },
          {
            imgSrc: 'Beinschienen',
            title: 'Beinschienen (Ocrae)',
            text:
              'Entweder der Gegner schafft es unter dem Scutum hindurch ans Schienbein, oder das Scutum selbst knallt einem versehentlich dagegen. Wer hier Abhilfe schaffen und seine Darstellung etwas aufwerten will, darf zu einer oder zwei römischen Beinschienen greifen. Falls nur eine, wird diese am vorgestellten linken Bein befestigt.'
          },
          {
            imgSrc: 'Manica',
            title: 'Armschutz (Manica)',
            text:
              'Wer dem Schwertarm was besonders Gutes tun will, hat in unserer Epoche die Möglichkeit eine Manica, entweder aus Messing oder Stahl, zu tragen. Als eine Art Verlängerung der Segmentata dient sie dazu, den Arm, der zum Angriff vor das schützende Schild schnellt, zu panzern. Wer zusätzlich die Faust schützen will, erweitert die Manica noch mit einem gepanzerten Fäustling, dem Caestus.'
          },
          {
            imgSrc: 'Wickel',
            title: 'Wadenwickel (Puttee)',
            text:
              'Römische Hosen sind meist nur Dreiviertelhosen und gehen somit bis unters Knie. Man kann die Beine aber mit ein Paar schönen Wadenwickeln und entsprechenden Fibeln zum Befestigen warmhalten.'
          },
          {
            imgSrc: 'Krams',
            title: 'Kleinkram und Gegenstände',
            text:
              'Römer lieben Kram, egal ob Beutel, Trinkflasche (Laguncula), Wachstafeln (Tabula Cerata), Siegelringe, beschlagene Truhen und Kästchen, Sesterzen, Messerchen etc.'
          }
        ]
      }
    ]
  })
}
</script>

<style scoped></style>
