import CommentModel from "./commentModel";
import jwt from "jwt-simple";
import ProjectModel from "../project/projectModel";



export async function addComment (req: any, res: any) {
    try {
      const secret = process.env.JWT_SECRET;
      const { comment, projectId } = req.body;
      const { currentUser } = req.cookies;

      if (!secret) throw new Error("No secret");
      const decoded = jwt.decode(currentUser, secret);
  
      const { userId } = decoded;
      
      const commentDB = await (await CommentModel.create({ user: userId, comment, project: projectId })).populate("user");
      
      res.send({ ok: true, commentDB });
    } catch (error:any) {
      console.error(error);
      res.status(500).send({ ok: false, error });
    }
  }
  
  export async function getComments (req: any, res: any){
    try {
      const { projectId } = req.query;
      const commentDB = await CommentModel.find({project: projectId}).populate("user");
      
      res.send({ ok: true, commentDB });
    } catch (error:any) {
      console.error(error.message)
      res.status(500).send({ ok: false, error });
    }
  }
