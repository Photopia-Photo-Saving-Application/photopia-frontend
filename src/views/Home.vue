<template>
  <div >
  <Navbar text="HOME"/>
      <UserForm :show="false">
          <template #messageField>
              <MyText>
                  Page Under Construction
              </MyText>
          </template>
      </UserForm>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
import UserForm from "@/components/UserForm/UserForm";
import MyText from "@/components/MyText/MyText";
export default {
  name: 'Home',
  components: {
      MyText,
      UserForm,
      Navbar
  }
}
</script>
