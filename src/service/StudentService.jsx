import axios from 'axios';
const STUDENT_API_BASE_URL="http://localhost:8080/student/";
class StudentService{
    getStudents(){
        return axios.get(STUDENT_API_BASE_URL + "students");
    }
    createStudents(student){
        return axios.post(STUDENT_API_BASE_URL + "students", student );
    }
    deleteStudent(studentId){
        return axios.delete(STUDENT_API_BASE_URL + "students" + '/' + studentId );
    }

}
export default new StudentService() 