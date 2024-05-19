import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";


  

// Définir une interface pour le payload du token
interface MyJwtPayload extends JwtPayload {
    role: string; // Ajouter la propriété 'role' au payload
}
const checkToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
        console.log("req",req);
        return res.status(401).json({ message: "Unauthorized" });
    }
    const tokenVerify = token.replace("Bearer ", "");
    try {
        
        const decodedToken = jwt.verify(tokenVerify, process.env.JWT_SECRET as string) as MyJwtPayload; // Décoder le token
       //  req.body.role= decodedToken; // Stocker les informations de l'utilisateur dans l'objet req pour y accéder dans les routes suivantes
       console.log("decodedToken",decodedToken);
       
        // Vérifier le rôle de l'utilisateur 
        if (decodedToken.role !== 'admin') {
            console.log("decodedToken.role",decodedToken.role);
            return res.status(403).json({ message: "acces refusé" }); // Si l'utilisateur n'a pas le rôle admin, retourner une erreur 403
        }

        next(); // Si l'utilisateur a le rôle admin, passer au middleware suivant
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}
 export default checkToken;