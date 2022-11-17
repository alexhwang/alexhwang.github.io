---
title: An embarrassing walkthrough | Electric fields in a conductive box/cavity/resonator (aka Loudon, The quantum theory of light, pg. 5)
date: 2020-05-04
tags: [electric, fields, conductive, box, cavity, resonator, Loudon]
published: false
---
# Intro

This post is all going to be about walking through part of something embarrassingly elementary: the electric fields within a conductive, cubic box. And I found it literally on the first page with an equation on it of a new textbook I started: *The quantum theory of light* by Rodney Loudon. I'm just hoping someone can learn something from my silly struggles :). I think I want my blog to be kind of an anti-textbook, where exercises are not left up to the reader, but left up for me to do and struggle with and explain them to others. It's also a really good reminder about how sticky my physics brain felt after not having read many textbooks in the past several months because I'm doing a research-based masters degree. Also if anyone has a simpler explanation for this please do let me know.

# How did this start? The third page of a textbook.

![Loudon Fig. 1.1](/assets/img/2020-05-04/img1.png)

When I got to page 5 of *The quantum theory of light* by Rodney Loudon, I was feeling pretty good. It's the beginning of a section called "Density of field modes in a cavity," which will lead to the derivation of Planck's Law. This is a derivation any physics student has done a thousand times, but I thought it would be good to brush up. The scenario we have is the simple and well-known conductive box filled with thermal radiation with a small hole on the side:

>To make the calculations as simple as possible, we choose a cubic cavity of side $$L$$, with axes defined as in Fig. 1.1. The walls of the cavity are assumed perfectly conducting, and the tangential components of the electric field $$\mathbf{E}(\mathbf{r},t)$$ must accordingly vanish at the boundaries.

Ok... so we have a basic cubic box with interior defined by $$0 \lt x \lt L, 0 \lt y \lt L, 0 \lt z \lt L$$, easy enough right? 

Of course the fields must satisfy the wave equation and Gauss's Law:

$$\nabla^2 \mathbf{E} = \frac{1}{c^2}\frac{\partial^2 \mathbf{E}}{\partial t^2}$$ and
$$\nabla \cdot \mathbf{E} = 0$$

And then, of course, as Loudon writes:

>The solution that satisfies the boundary conditions has components
>
>$$E_x = E_x(t)\cos(k_x x)\sin(k_y y)\sin(k_z z)$$   
>$$E_y = E_y(t)\sin(k_x x)\cos(k_y y)\sin(k_z z)$$     
>$$E_x = E_z(t)\sin(k_x x)\sin(k_y y)\cos(k_z z)$$    

This makes perfect sense right? Of course this simple problem is separable into $x,y,z$ and $t$, and of couse each separated component must have some sinusoidal dependence to satisfy the wave equation. And those $$k_i$$ terms will of course be some $$n_i\frac{2\pi}{L}$$ to be standing waves.

But wait, I was thinking... what is the deal with this $\cos$ and $\sin$ mixing business?

# The $$\sin$$ terms come from the boundary conditions easily

I didn't forget everything from undergraduate physics. Clearly the $\sin$ terms made sense to me. Because the tangential component of electric field must vanish at a metal interface because [tangential E-field is continuous](https://en.wikipedia.org/wiki/Interface_conditions_for_electromagnetic_fields), and E-field is 0 inside a metal. Great, so the two $$\sin$$ components per line are clearly setting the tangential electric-fields to be zero at the interface.

# But why the $$\cos$$ terms?

I was still unsatisfied with the $$\cos$$ part of each line. The boundary conditions definitely enforce that tangential E-field is zero, but don't say anything about normal E-field. The $$\cos$$ part didn't make sense to me, because hypothetically what's stopping the normal E-field to be zero as well? By setting the $$\cos$$ term, we're essentially setting the normal E-field to some *non-zero* value. Why does it have to be non-zero?? I thought that there had to be some sort of intuitive explanation.

# Why had I not wondered about this before?

I was so confused because I must've done this derivation at least 15 times, but this is the first time I've wondered why the fields can be written down so simply here. Why was I so confused about some trivial step in the derivation? I immediately searched online for variations on the classic Planck Law derivation that should be so familiar to every physics student. I think the answer to my question is that most authors skip past defining what the fields should look like and just lead us to the intuitive answer that the $$k_i = n_i\frac{2\pi}{L}$$. For example here are some things I found online.

![Wikipedia beginning of Planck Law derivation](/assets/img/2020-05-04/img2.png)
(From [Wikipedia](https://en.wikipedia.org/wiki/Planck%27s_law#Derivation))

