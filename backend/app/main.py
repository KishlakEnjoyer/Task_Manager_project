from fastapi import FastAPI

app = FastAPI(title="XDGroup Task Manager API")

@app.get("/")
def read_root():
    return {"message": "Hello by XDGroup!"}

@app.get("/tasks")
def get_tasks():
    return [{"id": 1, "title": "Sample Task"}]