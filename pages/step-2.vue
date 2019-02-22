<template>
  <section class="main-content">
    <div class="modal-step">
      <h3>Your information</h3>
      <div class="field-header">
        <h4>Name</h4>
        <span>Required</span>
      </div>
      <input-field name="Name" :value="name" @input="(val) => name = val"></input-field>
      <div class="field-header">
        <h4>E-mail</h4>
        <span>Required</span>
      </div>
      <input-field name="E-mail" input-type="email" :value="email" @input="(val) => email = val"></input-field>
      <div class="field-header">
        <h4>Phonenumber</h4>
        <span>Required</span>
      </div>
      <input-field name="Phonenumber" :value="phone" @input="(val) => phone = val.toString().substr(0,11)" input-type="tel" mask="+9999999999" @focus="setPhoneCode"></input-field>
       <div class="field-header">
        <h4>Address</h4>
        <span>Required</span>
      </div>
      <div class="field-block">
        <input-field name="Address line 1" :value="address.line1" @input="(val) => address.line1 = val"></input-field>
        <input-field name="Address line 2" :value="address.line2" @input="(val) => address.line2 = val"></input-field>
        <input-field name="Zip" input-type="tel" mask="9999" :value="address.zip" @input="(val) => address.zip = val.substr(0,4)"></input-field>
        <input-field name="Country" :value="address.country" @input="(val) => address.country = val"></input-field>
      </div>
    </div>
    <div class="survey-buttons">
      <nuxt-link to="/" class="btn btn--grey">Previous</nuxt-link>
      <button @click="goToNextStep" class="btn" :disabled="valid">Next</button>
    </div>
  </section>
</template>

<script>
import InputField from '~/components/input-field.vue';
import ValidateJS from 'validate.js';

export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '', // including area codes
      address: {
        line1: '',
        line2: '',
        zip: '',
        country: ''
      }
    }
  },
  components: {
      InputField
  },
  mounted() {
    this.$store.commit('step', 2);

    this.name = this.dataModel.name;
    this.email = this.dataModel.email;
    this.phone = this.dataModel.phone;
    this.address = Object.assign({}, this.dataModel.address);
  },
  watch: {
    name() {
      this.$store.commit('data', {
        name: this.name
      });
    },
    email() {
      this.$store.commit('data', {
        email: this.email
      });
    },
    phone() {
      this.$store.commit('data', {
        phone: this.phone
      });
    },
    address: {
      handler() {
        this.$store.commit('data', {
          address: Object.assign({}, this.address)
        });
      },
      deep: true
    }
  },
  methods: {
    goToNextStep() {
      this.$router.push({
        path: '/step-3'
      });
    },
    setPhoneCode() {
      if(!this.phone) {
        this.phone = '+45';
      }
    }
  },
  computed: {
    dataModel() {
      return this.$store.state.data;
    },
    valid() {
      return ValidateJS({
        name: this.name,
        email: this.email,
        phone: this.phone,
        address_line1: this.address.line1,
        zip: this.address.zip,
        country: this.address.country
      }, {
        name: {
          presence: {
            allowEmpty: false
          }
        },
        email: {
          presence: {
            allowEmpty: false
          },
          email: true
        },
        phone: {
          presence: {
            allowEmpty: false
          },
          numericality: true
        },
        address_line1: {
          presence: {
            allowEmpty: false
          }
        },
        zip: {
          presence: {
            allowEmpty: false
          },
          numericality: true
        },
        country: {
          presence: {
            allowEmpty: false
          },
        },
      })
    }
  }
}
</script>