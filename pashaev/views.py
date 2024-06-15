from django.shortcuts import render
from .models import About, Mod, Sign
from django.utils.translation import get_language

def pashaev(request):
    current_language = get_language()

    about, _ = About.objects.language(current_language).get_or_create(
        defaults={
            'content': """Abu Pashaev, born in 1966 in Chechen-Aul, is a distinguished artist whose life journey shapes 
            his profound creations. From serving in the Soviet Army to graduating in graphic design, Pashaev's diverse 
            experiences manifest in his artwork. Seeking guidance from renowned Chechen artists and integrating martial arts philosophy, 
            he crafted his style, "Wind." His graphic series, like "You Don't Know How Painful It Is!," explores inner worlds 
            with titles such as "Scream" and "Apocalypse." Pashaev's works express universal themes of pain, solitude, and the human condition, 
            showcasing his ability to convey deep emotions through a meticulous artistic process. His inaugural exhibition, 
            "Atomic Heart of My Mom" (1992), marked the beginning of a significant artistic journey. Abu Pashaev emerges as an artist 
            whose profound expressions resonate with the complexities of human existence."""
        }
    )

    mod, _ = Mod.objects.language(current_language).get_or_create(
        defaults={
            'content': """The artist's series of works, titled "Esoteric Perspective on Ancestral Symbols," is a profound exploration inspired by their late mentor, Vsevolod Semenych Grygoriev. Rooted in the artist's journey of self-discovery during the early 90s, these pieces reflect their deep immersion in avant-garde movements, particularly surrealism, as they sought to articulate their unique vision through art.""",
            'content2': """At the heart of these artworks lies a symbolic tapestry of imagery. The winged sun disk, a recurring motif, symbolizes the radiance of the sun and the warmth it brings, evoking feelings of tranquility and peace. Adjacent to it stands a towering structure—an architectural emblem representing human ingenuity and craftsmanship."""
        }
    )

    context = {
        "about": getattr(about, 'content', ""),
        "mod": getattr(mod, 'content', ""),
        "mod2": getattr(mod, 'content2', ""),
    }

    return render(request, "pashaev/pashaev_home.html", context)

def bio(request):
    current_language = get_language()

    about, _ = About.objects.language(current_language).get_or_create(
        defaults={
            'content': """Abu Pashaev, born in 1966 in Chechen-Aul, is a distinguished artist whose life journey shapes 
            his profound creations. From serving in the Soviet Army to graduating in graphic design, Pashaev's diverse 
            experiences manifest in his artwork. Seeking guidance from renowned Chechen artists and integrating martial arts philosophy, 
            he crafted his style, "Wind." His graphic series, like "You Don't Know How Painful It Is!," explores inner worlds 
            with titles such as "Scream" and "Apocalypse." Pashaev's works express universal themes of pain, solitude, and the human condition, 
            showcasing his ability to convey deep emotions through a meticulous artistic process. His inaugural exhibition, 
            "Atomic Heart of My Mom" (1992), marked the beginning of a significant artistic journey. Abu Pashaev emerges as an artist 
            whose profound expressions resonate with the complexities of human existence."""
        }
    )

    mod, _ = Mod.objects.language(current_language).get_or_create(
        defaults={
            'content': """The artist's series of works, titled "Esoteric Perspective on Ancestral Symbols," is a profound exploration inspired by their late mentor, Vsevolod Semenych Grygoriev. Rooted in the artist's journey of self-discovery during the early 90s, these pieces reflect their deep immersion in avant-garde movements, particularly surrealism, as they sought to articulate their unique vision through art.""",
            'content2': """At the heart of these artworks lies a symbolic tapestry of imagery. The winged sun disk, a recurring motif, symbolizes the radiance of the sun and the warmth it brings, evoking feelings of tranquility and peace. Adjacent to it stands a towering structure—an architectural emblem representing human ingenuity and craftsmanship.""",
            'content3': """Conversely, the balalaika, known as "dechig pondar," occupies the opposite end of the composition—a poignant tribute to ethnic culture, philosophy, and wisdom. Through its melodic resonance, the balalaika encapsulates the soulful essence of tradition and heritage, inviting viewers to delve into its rich tapestry of meanings."""
        }
    )

    sign, _ = Sign.objects.language(current_language).get_or_create(
        defaults={
            'content': """In this artwork, one encounters a depiction from the series "An Esoteric Perspective on 
            Ancestral Symbols", specifically the right part of the triptych. It portrays a figure resembling a thinker, 
            with the wing of a bird and a lowered hand, as if supporting a fragment of a mountain where a tower stands, 
            alongside a flying winged sun disk. The scene invites contemplation through time and space of the origins 
            of the depicted character's ancestors, the Sumerians and the Hurrians, representing a civilization that has 
            faded into history. As an artist chronicler, the piece reflects a dreamlike vision, with signs resembling 
            imprints suspended in the air, carrying cryptic information that eludes understanding, leaving viewers only 
            able to speculate. This artwork serves as a metaphorical journey of self-discovery..."""
        }
    )

    context = {
        "about": getattr(about, 'content', ""),
        "mod": getattr(mod, 'content', ""),
        "mod2": getattr(mod, 'content2', ""),
        "mod3": getattr(mod, 'content3', ""),
        "sign": getattr(sign, 'content', ""),
    }

    return render(request, "pashaev/bio.html", context)

def gallery(request):
    return render(request, "pashaev/gallery.html", {})

def contacts(request):
    return render(request, "pashaev/contacts.html", {})
