  <template>
    <div class="posts">
      <p>
        <a href="http://localhost:8080/">
        <img src="../assets/papayaicon.png" width="150"/>
        </a>
      </p>
      <h1>Edit Instrument</h1>
      <br>
      <div class="container">
        <form>

          <div class="columns is-multiline">

            <div class="column is-one-quarter">

            </div>

            <div class="column is-one-quarter">
              <div class="field">
                <label class="label">Name</label>
                <input class="input" type="text" name="instrument" placeholder="NAME" v-model="instrument"/>
              </div>
            </div>

            <div class="column is-one-quarter">
              <div class="field">
                <label class="label">Status</label>
                <div class="box">
                  <div class="level">
                    <div class="level-item">
                      <h1>Loaned</h1>
                    </div>
                    <div class="level-item">
                      <b-switch v-model="isSwitchedCustom"
                        true-value="Out"
                        false-value="In"
                        type="is-info">
                        {{ isSwitchedCustom }}
                      </b-switch>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-one-quarter">

            </div>

            <div class="column is-one-quarter">

            </div>

            <div class="column is-one-quarter">
              <div class="field">
                <label class="label">Loanee</label>
                <input class="input" type="text" name="loanee" placeholder="LOANEE" v-model="loanee" :disabled="isSwitchedCustom == 'In'"/>
              </div>
            </div>

            <div class="column is-one-quarter">
              <div class="field">
                <label class="label">Serial Number</label>
                <input class="input" type="text" name="serial" placeholder="SERIAL" v-model="serial"/>
              </div>
            </div>

            <div class="column is-one-quarter">

            </div>

            <div class="column is-one-quarter">

            </div>

            <div class="column is-half">
              <section>
              <b-field label="Tags">
                <b-taginput
                    v-model="tags"
                    :data="filteredTags"
                    autocomplete
                    field="tagName"
                    icon="label"
                    placeholder="Add a tag"
                    @typing="getFilteredTags"
                    :allow-new="true">
                    <template slot="empty">
                        There are no items
                    </template>
                </b-taginput>
              </b-field>
            </section>
            </div>

            <div class="column is-one-quarter">

            </div>

            <div class="column is-one-quarter">

            </div>

            <div class="column is-one-half">
              <a class="button is-link" @click="updatePost">Update</a>
              <!-- <button class="app_post_btn" @click="test">Update</button> -->
            </div>

            <div class="column is-one-quarter">

            </div>

          </div>

        </form>
      </div>
    </div>
  </template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'editinstrument',
  data () {
    return {
      isSwitchedCustom: '',
      instrument: '',
      status: '',
      loanee: '',
      serial: '',
      filteredTags: [],
      isSelectOnly: false,
      tags: []
    }
  },
  mounted () {
    this.loadAllTags()
    this.getPost()
  },
  methods: {
    async loadAllTags () {
      const response = await PostsService.fetchTags()
      this.filteredTags = response.data.tags
    },
    getFilteredTags (text) {
      this.filteredTags = this.data.filter((option) => {
        return option.tagName
            .toString()
            .toLowerCase()
            .indexOf(text.toLowerCase()) >= 0
      })
    },
    async getPost () {
      const response = await PostsService.getPost({
        id: this.$route.params.id
      })
      console.log(response.data)
      this.instrument = response.data.instrument
      this.isSwitchedCustom = response.data.status
      this.status = response.data.status
      this.loanee = response.data.loanee
      this.serial = response.data.serial
      this.tags = response.data.tags
      this.$router.push({ name: 'EditInstrument' })
    },
    async updatePost () {
      console.log(this.instrument, this.status, this.loanee, this.serial)
      if (this.isSwitchedCustom === 'In') {
        this.loanee = ''
      }
      await PostsService.updatePost({
        id: this.$route.params.id,
        instrument: this.instrument,
        status: this.isSwitchedCustom,
        loanee: this.loanee,
        serial: this.serial,
        tags: this.tags
      })
      this.$swal(
        'Great!',
        `Your post has been updated!`,
        'success'
      )
      this.$router.push({ name: 'table' })
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.loanedtitle {
  padding-right: 60px;
}
.label {
  text-align: left;
}
.box {
  height: 100%;
  padding-top: 4px;
  padding-bottom: 4px;
  border-style: unset;
  border-radius: unset;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>

