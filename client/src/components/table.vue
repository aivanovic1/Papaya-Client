<template>
  <div class="posts">
    <img src="../assets/papayaicon.png" width="150"/>
    <h1>Papaya</h1>
    <b-tabs position="is-left" class="block">


      <b-tab-item label="Instrument">
        <div class="columns is-multiline">

        <div class="column is-one-quarter">
        </div>

        <div class="column is-one-quarter">
        </div>

        <div class="column is-one-quarter">
        </div>

        <div class="column is-one-quarter">
          <b-field>
            <b-input icon="magnify" name="searchInput" type="search" placeholder="Search..." v-model="searchInput"></b-input>
            <button class="button is-primary" @click="searchPosts">Search</button>
          </b-field>
        </div>

        <div class="column is-one-fifth has-text-left">
          <aside class="menu">
            <p class="menu-label">
              Band & Orchestrals
            </p>
            <ul class="menu-list">
              <li>
                <b-checkbox v-model="checkboxGroup"
                  native-value="Woodwinds">
                  Woodwinds
                </b-checkbox>
              </li>
              <li>
                <b-checkbox v-model="checkboxGroup"
                  native-value="Brass">
                  Brass
                </b-checkbox>
              </li>
              <li>
                <b-checkbox v-model="checkboxGroup"
                  native-value="Percussion">
                  Percussion
                </b-checkbox>
              </li>
              <li>
                <b-checkbox v-model="checkboxGroup"
                  native-value="Strings">
                  Strings
                </b-checkbox>
              </li>
              <li>
                <p class="content">
                  <b>Selection:</b>
                    {{ checkboxGroup }}
                </p>
              </li>
            </ul>
            <!-- <p class="menu-label">
              Drums
            </p>
            <ul class="menu-list">
              <li><a>Dashboard</a></li>
              <li><a>Customers</a></li>
            </ul>
            <p class="menu-label">
              Guitars
            </p>
            <ul class="menu-list">
              <li><a>Dashboard</a></li>
              <li><a>Customers</a></li>
            </ul> -->
          </aside>
          <div>
            <a class="button is-link" @click="filterPosts">Filter</a>
          </div>
        </div>

        <div class="column is-four-fifths">
            <b-table :data="posts">
              <template scope="post">
                <b-table-column field="instrument" label="Instrument" width="150" sortable>
                  {{ post.row.instrument }}
                </b-table-column>
                <b-table-column field="status" label="Status" width="100" align="center" sortable>
                  {{ post.row.status }}
                </b-table-column>

                <b-table-column field="loanee" label="Loanee" width="150" sortable>
                  {{ post.row.loanee }}
                </b-table-column>

                <b-table-column field="serial" label="Serial Number" width="150" sortable>
                  {{ post.row.serial }}
                </b-table-column>

                <b-table-column field="action" label="Action" width="150">
                    <router-link v-bind:to="{ name: 'EditInstrument', params: { id: post.row._id } }">Edit</router-link> |
                    <a href="#" @click="deletePost(post.row._id)">Delete</a>
                </b-table-column>
              </template>
            </b-table>
          </div>
        </div>
      </b-tab-item>
        <!---
        <section>

        <b-table
            :data="isEmpty ? [] : posts"
            :bordered="isBordered"
            :striped="isStriped"
            :narrowed="isNarrowed"
            :hoverable="isHoverable"
            :loading="isLoading"
            :focusable="isFocusable"
            :mobile-cards="hasMobileCards">
            <template scope="posts"  v-for="post in posts" class="table-wrap">

                <b-table-column field="instrument" label="Name" width="150" left>
                    {{ post.row.instrument }}
                </b-table-column>

                <b-table-column field="status" label="Status">
                    {{ post.row.status }}
                </b-table-column>

                <b-table-column field="loanee" label="Loanee">
                    {{ post.row.loanee }}
                </b-table-column>

                <b-table-column field="serial" label="Serial Number">
                    {{ post.row.serial }}
                </b-table-column>

                <b-table-column label="Action">
                </b-table-column>

            </template>



            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <b-icon
                                icon="emoticon-sad"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>Nothing here.</p>
                    </div>
                </section>
            </template>
        </b-table>
    </section> -->

  <!-- <input type="text" v-model="search" @blur="filteredPosts2()" placeholder="Search...">
    <div v-if="posts.length > 0" class="table-wrap">
      <table align="center">
        <tr>
          <td width="150" align="center">Name</td>
          <td width="150" align="center">Status</td>
          <td width="150" align="center">Loanee</td>
          <td width="150" align="center">Serial Number</td>
          <td width="150" align="center">Action</td>
        </tr>
        <tr v-for="post in posts">
          <td>{{ post.instrument }}</td>
          <td>{{ post.status}}</td>
          <td>{{ post.loanee }}</td>
          <td>{{ post.serial }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'editpost', params: { id: post._id } }">Edit</router-link> |
            <a href="#" @click="deletePost(post._id)">Delete</a>
          </td>
        </tr>
      </table>
    </div>

    <div v-else>
      There are no instruments.. Lets add one now <br /><br />
      <router-link v-bind:to="{ name: 'addpost' }" class="add_post_link">Add Post</router-link>
    </div> -->

      <b-tab-item label="Sheet Music">

<input type="text" v-model="search" @blur="filteredPosts2()" placeholder="Search...">
    <b-table :data="posts">
        <template scope="post">
          <b-table-column field="title " label="Title" width="150" sortable>
                {{ post.row.title }}
            </b-table-column>
              <b-table-column field="composer" label="Composer" width="150" align="center" sortable>
                {{ post.row.composer }}
            </b-table-column>

              <b-table-column field="level" label="Level" width="150" sortable>
                {{ post.row.level }}
            </b-table-column>

            <b-table-column field="publisher" label="Publisher" width="150" sortable>
                {{ post.row.publisher }}
            </b-table-column>

            <b-table-column field="action" label="Action" width="150">
                <router-link v-bind:to="{ name: 'EditSheet', params: { id: post.row._id } }">Edit</router-link> |
                <a href="#" @click="deletePost(post.row._id)">Delete</a>
            </b-table-column>
    </template>
</b-table>

    <!--<div v-if="posts.length > 0" class="table-wrap">
      <table align="center">
        <tr>
          <td width="150" align="center">Name</td>
          <td width="150" align="center">Composer</td>
          <td width="150" align="center">Level</td>
          <td width="150" align="center">Publisher</td>
          <td width="150" align="center">Action</td>
        </tr>
        <tr v-for="post in posts">
          <td>{{ post.instrument }}</td>
          <td>{{ post.composer}}</td>
          <td>{{ post.serial }}</td>
          <td>{{ post.publisher }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'editpost', params: { id: post._id } }">Edit</router-link> |
            <a href="#" @click="deletePost(post._id)">Delete</a>
          </td>
        </tr>
      </table>
    </div>

    <div v-else>
      There are no instruments.. Lets add one now <br /><br />
      <router-link v-bind:to="{ name: 'addpost' }" class="add_post_link">Add Post</router-link>
    </div>-->

      </b-tab-item>

    </b-tabs>



  </div>
</template>

<script>
import PostsService from '@/services/PostsService'

export default {
  name: 'posts',
  data () {
    return {
      posts: [],
      search: '',
      searchInput: '',
      data: [],
      isEmpty: false,
      isBordered: false,
      isStriped: false,
      isNarrowed: false,
      isHoverable: false,
      isFocusable: false,
      isLoading: false,
      hasMobileCards: true,
      checkboxGroup: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data.instruments
      console.log(this.posts)
    },
    async filterPosts () {
      console.log(this.checkboxGroup)
      if (this.checkboxGroup.length === 0) {
        this.getPosts()
      } else {
        var tagToSend = ''
        for (var i = 0; i < this.checkboxGroup.length - 1; i++) {
          tagToSend += this.checkboxGroup[i] + '+'
        }
        tagToSend += this.checkboxGroup[this.checkboxGroup.length - 1]

        console.log(tagToSend)
        const response = await PostsService.filterPosts(tagToSend)
        this.posts = response.data
      }
    },
    async searchPosts () {
      console.log(this.searchInput)
      if (this.searchInput.length === 0) {
        this.getPosts()
      } else {
        const response = await PostsService.searchPosts(this.searchInput)
        this.posts = response.data
      }
    },
    async deletePost (id) {
      const $this = this
      $this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(response => {
        console.log('success callback from modal', response)
        if (typeof response.dismiss === 'undefined') {
          this.stuff(id)
        }
      }, error => {
        console.log('error callback from modal', error)
      })
    },
    async stuff (id) {
      const response = await PostsService.deletePost(id)
      this.posts = response.data.instruments
      console.log(this.posts)
      this.$router.push({ name: 'table' })
    }
  }
}
</script>
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  /*color: #fff;*/
  /*background-color: #4d7ef7;*/
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
