<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(): Response
    {

        $titlePartA = "Bienvenue sur mon Portfolio";
        $titlePartB = "Développeur Créatif & Passionné";

        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'titlePartA' => $titlePartA,
            'titlePartB' => $titlePartB,
        ]);
    }
}
