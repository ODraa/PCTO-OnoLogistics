<template>
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,400,0,0" />

  <div class="container">
    
    <aside>
      <div class="top">
        <div class="logo">
          <img src="@/assets/logono-dark.jpg" alt="">
          <h2><b>CHR<span class="primary">ONO</span></b></h2>
        </div>
        <div class="close" id="close_btn">
          <span class="material-symbols-sharp">close</span>
        </div>
      </div>
      <div class="sidebar">
        <a href="#" class="active">
          <span class="material-symbols-sharp">grid_view</span>
          <!-- <router-link to="/"></router-link> -->
          <h3>DASHBOARD</h3>
        </a>
        <a href="Chrono.vue" class="active">
          <span class="material-symbols-sharp">receipt_long</span>
          <!-- <router-link to="/crono"></router-link> -->
          <h3>Cronologia</h3>
        </a>
        <a href="#" class="active">
          <span class="material-symbols-sharp">person</span>
          <h3>??????</h3>
        </a>
        <a href="#" class="active">
          <span class="material-symbols-sharp">insights</span>
          <h3>??????</h3>
        </a>
        <a href="#" class="active">
          <span class="material-symbols-sharp">mail_outline</span>
          <h3>??????</h3>
        </a>
        <a href="#" class="active">
          <span class="material-symbols-sharp">inventory</span>
          <h3>??????</h3>
        </a>
        <a href="#" class="active">
          <span class="material-symbols-sharp">report_gmailerrorred</span>
          <h3>??????</h3>
        </a>
        <a href="#" class="active">
          <span class="material-symbols-sharp">add</span>
          <h3>?????</h3>
        </a>
        <a href="#" class="active">
          <span class="material-symbols-sharp">settings</span>
          <h3>Settings</h3>
        </a>
        <a href="#" class="active">
          <span class="material-symbols-sharp">logout</span>
          <h3>Log Out</h3>
        </a>
      </div>
    </aside>

    <!-- ======= DASHBOARD ======= -->

    <div class="main">
      <h1>Dashboard</h1>

      <div class="right">
        <div class="top">
          <button id="menu-btn">
            <span class="material-symbols-sharp">menu</span>
          </button>
          <div class="theme-toggler" v-text="currentDate"></div>
        </div>
      </div>
      <div class="date">
        <input type="date">
      </div>
      <div class="insights">
        <div class="sales">
          <span class="material-symbols-sharp">analytics</span>
          <div class="middle">
            <div class="lef">
              <h3>Info uno</h3>
              <h1>N ???</h1>
            </div>
            <div class="progress">

            </div>
          </div>
          <small class="text-muted">Last 24 Hours</small>
        </div>
        <!-- ====== END OF SALES ====== -->
        <div class="expanses">
          <span class="material-symbols-sharp">bar_chart</span>
          <div class="middle">
            <div class="lef">
              <h3>Info due</h3>
              <h1>X ???</h1>
            </div>
            <div class="progress">

            </div>
          </div>
          <small class="text-muted">Last 24 Hours</small>
        </div>
        <!-- ====== END OF SALES ====== -->
        <div class="income">
          <span class="material-symbols-sharp">stacked_line_chart</span>
          <div class="middle">
            <div class="lef">
              <h3>Info tre</h3>
              <h1>X ???</h1>
            </div>
            <div class="progress">

            </div>
          </div>
          <small class="text-muted">Last 24 Hours</small>
        </div>
        <!-- ====== END OF SALES ====== -->
      </div>

      <div class="search-bar">
        <table>
          <thead>
            <tr>
              <th>
                <span class="material-symbols-sharp">search</span>
                <!-- <h2>Search Item</h2> -->
                <span>
                  <input id="search" v-model="searchPayload" type="search" class="search" placeholder="" />
                </span>

              </th>
            </tr>
          </thead>
        </table>
      </div>


      <!-- ======= END DASHBOARD ======= -->

      <div class="recent-order">
        <h1>Cronologia</h1>
        <table>
          <thead>
            <tr>

              <th>
                <h2>Nome Prodotto⁣⁣⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣⁣ ⁣ ⁣⁣ ⁣ ⁣ ⁣ ⁣ ⁣⁣ ⁣ ⁣ ⁣ ⁣ ⁣
                  ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣⁣ ⁣ ⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣ID</h2>
              </th>
              <!-- <th>Codice Prodotto</th>
              <th>N Elementi</th>
              <th>Stato</th>
              <th></th> -->
            </tr>
          </thead>
          <!-- <div class="items-wrapper" id="items-wrapper"> -->
          <div class="item-card" v-for="item in filteredItems" :key="item.code">
            <td>
              <h2 class="item.card_title">{{ item.title }}</h2>
            </td>
            <td>
              <h2 class="item-card_code">{{ item.code }}</h2>
            </td>
          </div>
          <!-- </div> -->
        </table>


        <!-- <tbody>
            <tr>
              <td>Product Number One</td>
              <td>00001</td>
              <td>Uno</td>
              <td class="warning">Disponibile</td>
              <td class="primary">Details</td>
            </tr>
          </tbody> -->

        <!-- <a href="#">Show All</a> -->
      </div>
    </div>
  </div>
</template>



<script type="text/javascript">
import { computed } from "vue";
import { useRoute } from "vue-router";
import * as data from "./items"
var moment = require('moment');
export default {
  name: 'HelloWorld',
  props: {
    to: { type: String, required: true },
    // icon: { type: String, required: true },
  },
  setup(props) {
    const route = useRoute();
    const isActive = computed(() => route.path === props.to);
    return { isActive };
  },
  mounted() {
    console.log('welcome ')
  },
  data: function () {
    return {
      url: 'Chrono.vue',
      message: 'current date and time',
      currentDate: null,
      currentTime: null,

      filteredItems: [],
      searchPayload: '',
    }
  },
  watch: {
    searchPayload: function () {
      // console.log("payload", this.searchPayload)
      this.filteredItems = data.items.filter(item => item.title.toLowerCase().includes(this.searchPayload.toLowerCase()),
      )
    }

  },
  methods: {
    updateCurrent() {
      this.currentDate = moment().format('DD-MM-YYYY');
      this.currentTime = moment().format('LTS');
    }
  },
  created: function () {
    this.currentDate = moment().format('DD-MM-YYYY');
    this.currentTime = moment().format('LTS');
    setInterval(() => this.updateCurrent(), 1 * 1000);

    this.filteredItems = data.items
    // console.log("data", data.items);

  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  outline: 0;
  appearance: none;
  border: 0;
  text-decoration: 0;
  list-style: none;
  box-sizing: 0;
  background: #181a1e;
}

.container {
  display: grid;
  width: 96%;
  // height: 100%;
  margin: 0 auto;
  // background: #f6f6f9;
  // background: grey;
  gap: 1.8rem;
  grid-template-columns: 14rem auto;
}



a {
  color: #363949;
}

img {
  display: block;
  width: 100%;
}

h1 {
  font-weight: 800;
  font-size: 1.8rem;
  color: white;
}

h2 {
  font-size: 1.4rem;
  margin-top: 0.8rem;
}

h3 {
  font-size: 0.87rem;
}

h4 {
  font-size: 0.8rem;
}

h5 {
  font-size: 0.77rem;
}

small {
  font-size: 0.75rem;
}

.profile-photo {
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  overflow: hidden;
}

.text-muted {
  color: #7d8da1;
}

p {
  color: #677483;
}

b {
  color: #363949;
}

.primary {
  color: #7380ec;
}

.danger {
  color: #ff7782;
}

.success {
  color: #41f1b6;
}

.warning {
  color: #ffbb55;
}

aside {
  height: 1080px;
  // background: gray;

  .top {
    background: #181a1e;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.4rem;

    .logo {
      h2 {
        b {
          color: white;
        }
      }
    }
  }

  .logo {
    display: flex;
    gap: 0.5rem;

  }

  .logo img {
    width: 4rem;
    height: 3.5rem;
  }

  .close {
    display: none;
  }

  .sidebar {
    background: #181a1e;
    display: flex;
    flex-direction: column;
    height: auto;
    position: relative;
    top: 3rem;

    h3 {
      font-weight: 500;
      color: #677483;
    }

    a {
      display: flex;
      color: #7d8da1;
      margin: 2rem;
      gap: 1rem;
      align-items: center;
      position: relative;
      height: 3.7rem;
      transition: all 300ms ease;

      span {
        font-size: 1.6rem;
      }



    }
  }
}

// aside .sidebar a:last-child{
//   position: absolute;
//   bottom: 2rem;
//   width: 100%;
// }

aside .sidebar a .active {
  background-color: rgba(132, 139, 200, 0.18);
  color: #7380ec;
  margin-left: 0;
}

aside .sidebar a .active::before {
  content: '';
  width: 6px;
  height: 100%;
  background: #7380ec;
}

aside .sidebar a:hover {
  color: #7380ec;
  margin-left: 0;
}


aside .sidebar a:hover span {
  color: #7380ec;
  // margin-left: calc(1rem - 3px);
}

// ========= DASHBOARD  ========= //

.main {

  .right {
    margin-top: -1.8rem;

    .top {
      display: flex;
      justify-content: end;
      gap: 4rem;
      // background: gray;

      button {
        display: none;

      }

      .profile {
        // margin-top: -3rem;
        display: flex;
        gap: 2rem;
        text-align: right;
      }
    }

    .theme-toggler {
      font-size: large;
      font-size: 1.1rem;
      margin-right: 0.5rem;
      // background: rgba(132, 139, 200, 0.18);
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 1.6rem;
      width: 6.0rem;
      cursor: pointer;
      border-radius: 0.4rem;
      color: #7d8da1;

      span {
        font-size: 1.2rem;
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .active {
          background: #7380ec;
          color: white;
          border-radius: 0.4rem;

        }
      }
    }

    .recent-updates {
      margin-top: 1rem;

      h2 {
        margin-bottom: 0.8rem;
      }

      .updates {
        // background: #fff;
        height: 700px;
        padding: 1.8rem;
        border-radius: 2rem;
        box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
        transition: all 300ms ease;
        background: transparent;

        .update {
          display: grid;
          grid-template-columns: 2.6rem auto;
          gap: 1.5rem;
          margin-bottom: 2rem;

        }
      }
    }
  }

  margin-top: 1.8rem;

  .date {
    display: inline-block;
    background: #030303;
    border-radius: 0.4rem;
    margin-top: 1rem;
    padding: 0.5rem 1.6rem;

    input {
      background: transparent;
      color: white;
    }
  }

  .insights {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.6rem;

    >div {
      background: #202528;
      padding: 1.8rem;
      border-radius: 2rem;
      margin-top: 1rem;
      box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.4);

      * {
        background: #202528;
      }

      span {
        background: #7380ec;
        padding: 0.5rem;
        border-radius: 50%;
        color: #202528;
        font-size: 2rem;
      }

      h3 {
        margin-top: 1.5rem;
        color: white;
      }

      h1 {
        margin-top: 0.5rem;
        margin-bottom: 1rem;
        color: white;
      }
    }
  }

  // ========= CHRONOLOGY ========= //  
  .recent-order {
    display: grid;
    margin-top: 3rem;

    a {
      text-align: center;
      display: block;
      margin: 1rem auto;
      color: #7380ec;
      background: transparent;
    }


    h1 {
      margin-bottom: 1rem;
    }

    h2 {
      margin-bottom: 0.8rem;
      color: white;
    }

    table {
      background: #202528;
      width: 100%;
      border-radius: 2rem;
      padding: 1.8rem;
      text-align: left;
      box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.4);
      transition: all 300ms ease;
      color: #363949;
      margin-bottom: auto;

      thead {
        h2 {
          color: white;
        }
      }

      h2 {
        color: #677483;
      }


      tbody {
        td {
          height: 4.8rem;
          border-bottom: 1px solid rgba(132, 139, 200, 0.18);
          color: #677483;
        }

      }

      * {
        background: #202528;
      }
    }

    .item-card {
      margin-top: 2rem;
      background: #202528;
      width: auto;
      border-radius: 2rem;
      padding: 1rem;
      text-align: center;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
      transition: all 300ms ease;
      color: #677483;

      * {
        background: #202528;
      }

      .item-card_code {
        margin-left: 25rem;
      }
    }
  }

  .search-bar {
    margin-top: 3rem;


    h2 {
      // margin-bottom: 0.8rem;
      margin-left: 3rem;
      color: white;
    }

    table {
      display: flex;
      background: #202528;
      width: 100%;
      border-radius: 2rem;
      padding: 0.9rem;
      text-align: left;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
      transition: all 300ms ease;
      color: white;

      * {
        background: #202528;
      }


      span {
        margin: auto;
        margin-top: 0.5rem;
        // margin-right: 2rem;
        // margin-top: 0.4rem;
        // align-items: center;
        // justify-content: center;
        // text-align: center;

        .search {
          display: inline-block;
          justify-content: center;
          // text-align: center;
          font-size: 1.9rem;
          align-items: center;
          margin-top: -2rem;
          margin-left: 1rem;
          color: white;
        }
      }


    }

    .item-card_code {
      margin-left: 25rem;
    }
  }
}

.main .recent-order table tbody tr:last-child td {
  border: none;
}

.main .recent-order table:hover {
  box-shadow: none;
}

.main .insights>div:hover {
  box-shadow: none;
}

.main .insights>div.expanses span {
  background: #ff7782;
}

.main .insights>div.income span {
  background: #41f1b6;
}

// ====== RIGHT PANEL ====== //



.right .recent-updates .updates:hover {
  box-shadow: none;
}
</style>