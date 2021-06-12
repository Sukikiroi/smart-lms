import logo from './logo.svg';
import './App.css';
 import Navbar from './StudentView/Navbar'
 import Search from './StudentView/Search'
 import MostPopular from './StudentView/MostPopular'
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Bookview from './BooksView/BookView';
function App() {
  const AllBooks = [
    {
      publishers: ["Puffin"],
      number_of_pages: 228,
      subtitle: "And Six More",
      ia_box_id: ["IA179301"],
      covers: [9158801],
      ia_loaded_id: ["wonderfulstoryof00dahl_0"],
      last_modified: {
        type: "/type/datetime",
        value: "2020-03-12T22:01:14.120842",
      },
      latest_revision: 12,
      key: "/books/OL7353619M",
      authors: [{ key: "/authors/OL34184A" }],
      ocaid: "wonderfulstoryof00dahl_0",
      languages: [{ key: "/languages/eng" }],
      source_records: [
        "amazon:0140328742:11:418258098:241363",
        "ia:wonderfulstoryof00dahl_0",
      ],
      title: "The Wonderful Story of Henry Sugar",
      identifiers: { librarything: ["3273326"], goodreads: ["386245"] },
      created: { type: "/type/datetime", value: "2008-04-29T13:35:46.876380" },
      isbn_13: ["9780140328745"],
      isbn_10: ["0140328742"],
      publish_date: "October 1, 1988",
      works: [{ key: "/works/OL45864W" }],
      type: { key: "/type/edition" },
      first_sentence: {
        type: "/type/text",
        value:
          "Not so long ago, I decided to spend a few days in the West Indies.",
      },
      revision: 12,
    },
    {
      publishers: ["Puffin"],
      number_of_pages: 228,
      subtitle: "And Six More",
      ia_box_id: ["IA179301"],
      covers: [9158801],
      ia_loaded_id: ["wonderfulstoryof00dahl_0"],
      last_modified: {
        type: "/type/datetime",
        value: "2020-03-12T22:01:14.120842",
      },
      latest_revision: 12,
      key: "/books/OL7353619M",
      authors: [{ key: "/authors/OL34184A" }],
      ocaid: "wonderfulstoryof00dahl_0",
      languages: [{ key: "/languages/eng" }],
      source_records: [
        "amazon:0140328742:11:418258098:241363",
        "ia:wonderfulstoryof00dahl_0",
      ],
      title: "The Wonderful Story of Henry Sugar",
      identifiers: { librarything: ["3273326"], goodreads: ["386245"] },
      created: { type: "/type/datetime", value: "2008-04-29T13:35:46.876380" },
      isbn_13: ["9780140328745"],
      isbn_10: ["0140328742"],
      publish_date: "October 1, 1988",
      works: [{ key: "/works/OL45864W" }],
      type: { key: "/type/edition" },
      first_sentence: {
        type: "/type/text",
        value:
          "Not so long ago, I decided to spend a few days in the West Indies.",
      },
      revision: 12,
    },
    {
      other_titles: ["N und O, Enne und Zero", "Motus, etc."],
      publishers: ["Museion", "Folio Verlag"],
      subtitle: "motus, etc.",
      isbn_10: ["385256039X"],
      lc_classifications: ["N6918.5.E55 N2 1996"],
      latest_revision: 2,
      key: "/books/OL735362M",
      publish_places: ["Bolzano", "Wien"],
      contributions: [
        "Siena, Pier Luigi.",
        "Hapkemeyer, Andreas, 1955-",
        "Museo d'arte moderna (Bolzano, Italy)",
        "Palazzo della ragione (Padua, Italy)",
        "Galleria nazionale d'arte moderna (San Marino)",
      ],
      subject_time: ["20th century"],
      languages: [{ key: "/languages/ger" }],
      pagination: "176 p. :",
      source_records: [
        "marc:marc_loc_2016/BooksAll.2016.part26.utf8:107830783:1441",
      ],
      title: "N&O, Enne & Zero",
      lccn: ["97125891"],
      notes: {
        type: "/type/text",
        value:
          "Text in German and Italian.\nIncludes bibliographical references.\nCatalog of an exhibition held at the Museion, Museum fu\u0308r Moderne Kunst, Bozen, Mar. 1-May 19, 1996; the Palazzo della ragione, Padova, June 1-Aug. 18, 1996; and the Galleria d'arte moderna e contemporanea, San Marino, Aug. 30-Oct. 6, 1996.",
      },
      number_of_pages: 176,
      created: { type: "/type/datetime", value: "2008-04-01T03:28:50.625462" },
      edition_name: "1. Aufl.",
      subjects: [
        "Gruppo Enne -- Exhibitions.",
        "Zero (Group of artists) -- Exhibitions.",
        "Avant-garde (Aesthetics) -- History -- 20th century -- Exhibitions.",
      ],
      publish_date: "1996",
      publish_country: "it ",
      last_modified: {
        type: "/type/datetime",
        value: "2020-11-26T09:26:18.513580",
      },
      by_statement: "Kuratoren, Pier Luigi Siena, Andreas Hapkemeyer.",
      works: [{ key: "/works/OL23649892W" }],
      type: { key: "/type/edition" },
      revision: 2,
    },
    {
      publishers: ["Centro italiano femminile"],
      lc_classifications: ["MLCS 2002/07070 (B)"],
      latest_revision: 2,
      key: "/books/OL735363M",
      publish_places: ["[Roma]"],
      contributions: ["Centro italiano femminile."],
      pagination: "144 p. ;",
      source_records: [
        "marc:marc_loc_2016/BooksAll.2016.part26.utf8:107832224:511",
      ],
      title: "Cristianesimo e marxismo.",
      lccn: ["97125892"],
      notes: {
        type: "/type/text",
        value:
          '"Roma, 1-4 novembre 1975, 1o corso di studio e formazione"--P. [2] of cover.',
      },
      number_of_pages: 144,
      created: { type: "/type/datetime", value: "2008-04-01T03:28:50.625462" },
      languages: [{ key: "/languages/ita" }],
      last_modified: {
        type: "/type/datetime",
        value: "2020-11-26T09:26:19.498666",
      },
      publish_date: "1976",
      publish_country: "it ",
      works: [{ key: "/works/OL23649893W" }],
      type: { key: "/type/edition" },
      revision: 2,
    },
    {
      publishers: ["Centro italiano femminile"],
      lc_classifications: ["MLCS 2002/07070 (B)"],
      latest_revision: 2,
      key: "/books/OL735363M",
      publish_places: ["[Roma]"],
      contributions: ["Centro italiano femminile."],
      pagination: "144 p. ;",
      source_records: [
        "marc:marc_loc_2016/BooksAll.2016.part26.utf8:107832224:511",
      ],
      title: "Cristianesimo e marxismo.",
      lccn: ["97125892"],
      notes: {
        type: "/type/text",
        value:
          '"Roma, 1-4 novembre 1975, 1o corso di studio e formazione"--P. [2] of cover.',
      },
      number_of_pages: 144,
      created: { type: "/type/datetime", value: "2008-04-01T03:28:50.625462" },
      languages: [{ key: "/languages/ita" }],
      last_modified: {
        type: "/type/datetime",
        value: "2020-11-26T09:26:19.498666",
      },
      publish_date: "1976",
      publish_country: "it ",
      works: [{ key: "/works/OL23649893W" }],
      type: { key: "/type/edition" },
      revision: 2,
    },
    {
      other_titles: [
        "Services micros : pre\u0301visions et perspectives de marche\u0301, 1994-1997",
      ],
      publishers: ["INPUT"],
      subtitle: "pre\u0301visions & perspectives de marche\u0301, 1994-1997.",
      subject_place: ["France"],
      lc_classifications: ["MLCM 96/15095 (H)"],
      latest_revision: 2,
      key: "/books/OL735365M",
      publish_places: ["Frankfurt", "New York"],
      contributions: ["INPUT (Firm)"],
      pagination: "vi, [62] p. :",
      source_records: [
        "marc:marc_loc_2016/BooksAll.2016.part26.utf8:107833480:716",
      ],
      title: "Les services micros",
      lccn: ["97125895"],
      notes: {
        type: "/type/text",
        value: '"De\u0301cembre 1994."\n"Programme France"--Cover.',
      },
      number_of_pages: 62,
      created: { type: "/type/datetime", value: "2008-04-01T03:28:50.625462" },
      languages: [{ key: "/languages/fre" }],
      subjects: ["Computer service industry -- France -- Forecasting."],
      publish_date: "1994",
      publish_country: "gw ",
      last_modified: {
        type: "/type/datetime",
        value: "2020-11-26T09:26:21.226512",
      },
      works: [{ key: "/works/OL23649894W" }],
      type: { key: "/type/edition" },
      revision: 2,
    },
    {
      publishers: ["P. Lang"],
      identifiers: { goodreads: ["4149103"] },
      subtitle:
        "eine Auswahl von Texten zur englischen und amerikanischen Literatur, 1959-1996",
      isbn_10: ["3631306075"],
      subject_place: ["English-speaking countries"],
      lc_classifications: ["PR99 .H56 1996"],
      latest_revision: 4,
      key: "/books/OL735366M",
      authors: [{ key: "/authors/OL39233A" }],
      publish_places: ["Frankfurt am Main", "New York"],
      pagination: "418 p. ;",
      source_records: [
        "marc:marc_loc_2016/BooksAll.2016.part26.utf8:107834196:997",
      ],
      title: "Life and literature",
      dewey_decimal_class: ["820.9/00914"],
      notes: {
        type: "/type/text",
        value: "German and English.\nIncludes bibliographical references.",
      },
      number_of_pages: 418,
      created: { type: "/type/datetime", value: "2008-04-01T03:28:50.625462" },
      languages: [{ key: "/languages/ger" }],
      lccn: ["97125896"],
      subjects: [
        "English literature -- History and criticism.",
        "American literature -- History and criticism.",
        "English-speaking countries -- Intellectual life.",
      ],
      publish_date: "1996",
      publish_country: "gw ",
      last_modified: {
        type: "/type/datetime",
        value: "2020-11-26T09:26:21.763225",
      },
      series: [
        "Britannia,",
        "v. 6",
        "Britannia (Frankfurt am Main, Germany) ;",
        "v. 6.",
      ],
      by_statement: "Horst Ho\u0308hne.",
      works: [{ key: "/works/OL551029W" }],
      type: { key: "/type/edition" },
      revision: 4,
    },
  ];
  console.log(AllBooks)
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/bookinfo">
          <Navbar />
          <Bookview/>
        </Route>
        <Route path="/users">
          <Navbar />
        </Route>
        <Route path="/">
          <Navbar />
          <Search />
          <MostPopular />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
