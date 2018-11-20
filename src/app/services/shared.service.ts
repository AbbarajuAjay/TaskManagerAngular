import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { debuglog } from 'util';

@Injectable()
export class SharedService {
baseUrl:"http://localhost/TaskManager.APIProject/";

  constructor(private httpclient: HttpClient) 
  { }
  IDs:string;
  selectedTask : Task;
  TaskList : Task[];
  GetListTask():Observable<any>
  {
    return this.httpclient.get("http://localhost/TaskManager.APIProject/GetAllTask");
  }
  AddTask(task:Task):Observable<any>
  {
    debugger;
    return this.httpclient.post("http://localhost/TaskManager.APIProject/AddTask",task);
    
  }
  GetTaskByID(IDs:string):Observable<any>{
    debugger;
    return this.httpclient.get("http://localhost/TaskManager.APIProject/GetTaskById/"+IDs);
    
  }  
  DeleteTask(ID:string):Observable<any>{
    return this.httpclient.delete("http://localhost/TaskManager.APIProject/DeleteTaskById/"+ID);

  }
  UpdateTask(task:Task,IDs):Observable<boolean>{
    debugger;
    return this.httpclient.put<any>("http://localhost/TaskManager.APIProject/UpdateTaskById/"+IDs,task);
  }  

  EndTask(task:Task,IDs):Observable<any>
  {
    debugger
    return this.httpclient.put<any>("http://localhost/TaskManager.APIProject/EndTaskById/"+IDs,task);
    
  }
  Edit(task:Task):Observable<any>
  {
    return this.httpclient.put<any>("http://localhost/TaskManager.APIProject/UpdateTaskById/"+task.TaskID,task);
  }

}
