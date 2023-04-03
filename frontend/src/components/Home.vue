<template>
    <div id="home">
        <!-- login signout -->
        <div :class="{modal: modal, 'is-active': isActive_Sign_in}">
            <div class="modal-background"></div>
            <form class="box  modal-content">
                <div class="field">
                    <label class="label has-text-centered">Sign in</label>
                </div>
                <div class="field">
                    <h1 class="label">Email</h1>
                    <div class="control">
                        <input class="input" type="email" placeholder="e.g. alex@example.com" />
                    </div>
                </div>

                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                        <input class="input" type="password" placeholder="********" />
                    </div>
                </div>

                <a class="button is-primary" @click="login()">Sign in</a>
                <button class="button is-danger" @click="Close()">Close</button>
            </form>

        </div>
        <div :class="{modal: modal, 'is-active': isActive_Sign_up}">
            <div class="modal-background"></div>

            <form class="box  modal-content">
                <div class="field">
                    <label class="label has-text-centered">Sign up</label>
                </div>

                <div class="field">
                    <h1 class="label">First Name</h1>
                    <div class="control">
                        <input class="input" type="text" placeholder="Puttipong" v-model="sign_fname" />
                    </div>
                </div>
                <div class="field">
                    <h1 class="label">Last Name</h1>
                    <div class="control">
                        <input class="input" type="text" placeholder="Panich" v-model="sign_lname" />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Phone number</label>
                    <div class="control">
                        <input class="input" type="password" placeholder="083-3343-xxx" v-model="sign_phone" />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Date</label>
                    <div class="control">
                        <input class="input" type="date" placeholder="24/07/2002" v-model="sign_dob" />
                    </div>
                </div>
                <div class="field">
                    <h1 class="label">Email</h1>
                    <div class="control">
                        <input class="input" type="email" placeholder="e.g. alex@example.com" v-model="sign_email" />
                    </div>
                </div>

                <div class="field">
                    <label class="label">User Name</label>
                    <div class="control">
                        <input class="input" type="password" placeholder="Folk" v-model="sign_username" />
                    </div>
                </div>

                <div class="field">
                    <label class="label">Password</label>
                    <div class="control"> <input class="input" type="password" placeholder="********"
                            v-model="sign_pass" />
                    </div>
                </div>

                <button class="button is-primary">
                    <a href="profile.html">Sign up</a>
                </button>
                <button class="button is-danger" @click="Close()">Close</button>
            </form>
        </div>
        <!-- banner -->

        <section class="hero has-background-info-light is-large bannerImage">
            <div class="hero-body has-text-centered" style="z-index: 2;">
                <p class="title is-size-1">
                    HOTEL BOOKING
                </p>
                <p class="subtitle">
                    information for you
                </p>
            </div>
        </section>




        <!-- content -->
        <div class="container my-5" v-for="room in rooms" :key="room">

            <div id="room.room_id">
                <div class="tile is-ancestor my-5 has-background-danger-light">
                    <div class="tile is-4 is-vertical is-parent">
                        <div class="tile is-child">

                            <img src="../assets/banner.jpg" alt="" style="width: 100%;">
                            <fa icon="star" class=" mt-3" style="font-size:40px ;color:rgb(244, 247, 76)"></fa>
                            <fa icon="star" class=" mt-3" style="font-size:40px ;color:rgb(244, 247, 76)"></fa>
                            <fa icon="star" class=" mt-3" style="font-size:40px ;color:rgb(244, 247, 76)"></fa>
                            <fa icon="star" class=" mt-3" style="font-size:40px ;color:rgb(188, 188, 165)"></fa>
                            <fa icon="star" class=" mt-3" style="font-size:40px ;color:rgb(188, 188, 165)"></fa>
                        </div>
                    </div>
                    <div class="tile is-parent is-vertical">
                        <div class="tile is-child">
                            <p class="title">{{room.room_type}}</p>
                            <p class="subtitle">{{room.description}}</p>
                        </div>
                        <!-- services -->
                        <hr>
                        <p class="subtitle is-5">Facilities</p>
                        <div class="columns">
                            <div class="column is-2 has-text-centered">
                                <fa icon="coffee" style="font-size:50px"></fa><br>
                                breakfast
                            </div>

                            <div class="column is-2 has-text-centered">
                                <fa icon="wifi" style="font-size:50px"></fa><br>
                                internet
                            </div>
                            <div class="column is-2 has-text-centered">
                                <fa icon="wifi" style="font-size:50px"></fa><br>
                                internet
                            </div>
                            <div class="column is-2 has-text-centered">
                                <fa icon="swimming-pool" style="font-size:50px"></fa><br>
                                pool
                            </div>

                        </div>
                        <div class="tile is-child has-text-right">
                            <p class="title has-text-danger"></p>
                            <a href="booking.html">
                                <button v-if="logins == true" class="button has-background-success">จองตอนนี้</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
//import axios
import axios from "axios";
/* add fontawesome core */


export default {

  data() {
    return {
      rooms: [],
      modal: true,
      isActive_Sign_in: false,
      isActive_Sign_up: false,
      logins: false,
      sign_fname: '',
      sign_lname: '',
      sign_phone: '',
      sign_dob: '',
      sign_email: '',
      sign_username: '',
      sign_pass: '',
      image: 'https://hips.hearstapps.com/hmg-prod/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1.00xw:0.756xh;0,0.0756xh&resize=1200:*'
    };
  },
  created() {
    this.getRooms();
  },
  methods: {
    // get all rooms
    async getRooms(){
        try{
            const response = await axios.get('http://localhost:5000/room')
            this.rooms = response.data;
            console.log(this.rooms);

        }catch(err){
            console.log(err);
        }
    },
    Close() {
        this.isActive_Sign_in = false
        this.isActive_Sign_up = false
    },
    login() {
        this.logins = true;
        this.isActive_Sign_in = false
    }
  },
};
</script>

<style>
</style>
