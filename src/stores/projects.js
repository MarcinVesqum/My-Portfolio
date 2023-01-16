import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { 
  collection, onSnapshot, 
  query, doc, 

} from "firebase/firestore"
import { projectsColection } from '../firebase/init'

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: []
  }),
  actions: {
    init() {
        this.getProjects()
    },
    async getProjects() {

      await onSnapshot(projectsColection, (querySnap) => {
        let projects = []
        querySnap.forEach(doc => {
          let project = {
            id: doc.id,
            title: doc.data().title,
            subtitle: doc.data().subtitle ,
            description: doc.data().description ,
            img: doc.data().img ,
            alt: doc.data().alt ,
            url: doc.data().url 
          }
          projects.push(project)
        })
        this.projects = projects
      }, error => {
        console.log('error:', error.message);
      })
    }
  }
 
})
